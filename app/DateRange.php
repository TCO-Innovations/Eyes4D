<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DateRange
{
    private $date;

    private $type;

    public function __construct($date, $type)
    {
        $this->date = $date;

        $this->type = $type;
    }

    public static function generate($date = null, $type = "daily")
    {
        return collect((new self($date, $type))->{$type}());
    }

    public function columns()
    {
        if ($this->type == "daily") {
            return "dates AS start, dates + '59 MINUTE 59 SECOND' AS stop, {$this->subQuery()}";
        }

        if ($this->type == "weekly") {
            return "dates AS dates, to_char(dates, 'Day') AS day_name";
        }

        if ($this->type == "monthly") {
            return "dates";
        }

        if ($this->type == "yearly") {
            return "dates";
        }
    }

    public function table()
    {
        return "generate_series('{$this->getStartTime()}'::timestamp, '{$this->getStopTime()}'::timestamp, '{$this->getStep()}'::interval) AS dates";
    }

    public function daily()
    {
        return DB::select("SELECT " . $this->columns() . " FROM " . $this->table());
    }

    public function weekly()
    {
        return DB::select("SELECT " . $this->columns() . " FROM " . $this->table());
    }

    public function monthly()
    {
        return DB::select("SELECT " . $this->columns() . " FROM " . $this->table());
    }

    public function yearly()
    {
        return DB::select("SELECT " . $this->columns() . " FROM " . $this->table());
    }

    protected function plans()
    {
        $carbon = $this->date ? Carbon::parse($this->date) : Carbon::now();

        return collect([
            "daily" => [
                "start" => $carbon->startOfDay()->toDateTimeString(),
                "stop" => $carbon->endOfDay()->toDateTimeString(),
                "step" => "1 hour"
            ],
            "weekly" => [
                "start" => $carbon->startOfWeek()->toDateTimeString(),
                "stop" => $carbon->endOfWeek()->toDateTimeString(),
                "step" => "1 day"
            ],
            "monthly" => [
                "start" => $carbon->startOfMonth()->toDateTimeString(),
                "stop" => $carbon->endOfMonth()->toDateTimeString(),
                "step" => "1 day"
            ],
            "yearly" => [
                "start" => $carbon->startOfYear()->toDateTimeString(),
                "stop" => $carbon->endOfYear()->toDateTimeString(),
                "step" => "1 day"
            ]
        ])->get($this->type);
    }

    protected function getStartTime()
    {
        return $this->plans()['start'];
    }

    protected function getStopTime()
    {
        return $this->plans()['stop'];
    }

    protected function getStep()
    {
        return $this->plans()['step'];
    }

    public function subQuery()
    {
        return "(SELECT COUNT(id)AS has_latrine FROM runs WHERE is_there_a_latrine='Yes' AND created_on>=dates AND created_on<=dates+'59 MINUTE 59 SECOND' GROUP BY DATE(created_on))";
    }
}
