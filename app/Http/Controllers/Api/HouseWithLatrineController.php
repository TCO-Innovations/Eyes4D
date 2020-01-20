<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HouseWithLatrineController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function __invoke()
    {
        return collect(DB::select($this->queryBuilder()));
    }

    public function queryBuilder()
    {
        return "SELECT {$this->columns()} FROM {$this->table()} WHERE {$this->where()}";
    }

    public function columns()
    {
        return "{$this->latrineCountColumn()}, {$this->totalRunsColumn()}";
    }

    public function latrineCountColumn()
    {
        return "COUNT(has_latrine) AS latrine_count";
    }

    public function totalRunsColumn()
    {
        if (request()->has("region")) {
            $query = Str::lower(trim(request('region')));

            return "(SELECT COUNT(*) FROM runs_view where LOWER(region) like '%{$query}%') AS total";
        }

        if (request()->has("district")) {
            $query = Str::lower(trim(request('district')));

            return "(SELECT COUNT(*) FROM runs_view where LOWER(district) like '%{$query}%') AS total";
        }

        return "(SELECT COUNT(*) FROM runs) as total";
    }

    public function table()
    {
        return "runs_view";
    }

    private function where()
    {
        if (request()->has("region")) {
            $query = Str::lower(request('region'));

            return "has_latrine = 'Yes' And LOWER(region) like '%{$query}%'";
        }

        if (request()->has("district")) {
            $query = Str::lower(request('district'));

            return "has_latrine = 'Yes' And LOWER(district) like '%{$query}%'";
        }

        return "has_latrine = 'Yes'";
    }
}
