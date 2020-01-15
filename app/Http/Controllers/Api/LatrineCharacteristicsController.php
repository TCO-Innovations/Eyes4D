<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LatrineCharacteristicsController extends Controller
{
    public function __invoke(Request $request)
    {
        return collect(DB::select("SELECT {$this->columns()} FROM {$this->table()}"))->map(function ($collection){
           return [
               "time" => Carbon::parse($collection->dates)->toTimeString(),
               "date" => $collection->dates,
               "has_latrine" => $collection->has_latrine ?? 0,
               "has_lockable_door" => $collection->has_lockable_door ?? 0,
               "has_brick_wall" => $collection->has_brick_wall ?? 0,
               "has_cemented_floor" => $collection->has_cemented_floor ?? 0,
               "has_iron_sheet_roof" => $collection->has_iron_sheet_roof ?? 0,
               "has_adjacent_bathroom" => $collection->has_adjacent_bathroom ?? 0,
           ];
        });
    }

    public function table()
    {
        $date   =  Carbon::parse(request('date'));

        if (request('period') == 'daily') {

            $start  =  $date->startOfDay()->toDateTimeString();

            $stop   =  $date->endOfDay()->toDateTimeString();

            $interval = '1 hours';

            return "generate_series('{$start}'::TIMESTAMP, '{$stop}'::TIMESTAMP, '{$interval}'::INTERVAL) as dates";
        }

        if (request('period') == "monthly") {

            $start  =  $date->startOfMonth()->toDateTimeString();

            $stop   =  $date->endOfMonth()->toDateTimeString();

            $interval = '1 day';

            return "generate_series('{$start}'::TIMESTAMP, '{$stop}'::TIMESTAMP, '{$interval}'::INTERVAL) as dates";
        }

        if (request('period') == "annually") {

            $start  =  $date->startOfYear()->toDateTimeString();

            $stop   =  $date->endOfYear()->toDateTimeString();

            $interval = '1 day';

            return "generate_series('{$start}'::TIMESTAMP, '{$stop}'::TIMESTAMP, '{$interval}'::INTERVAL) as dates";
        }
    }

    public function columns()
    {
        return "dates, {$this->hasLatrine()}, {$this->hasLockableDoor()}, {$this->hasBrickWall()}, {$this->hasCementedFloor()}, {$this->hasIronSheetRoof()}, {$this->hasAdjacentBathroom()}";
    }

    public function hasLatrine()
    {
        if (request('period') == 'daily') {
            return "
            (
                SELECT
                    COUNT(DATE_TRUNC('hour', created_on))
                FROM
                    runs
                WHERE
                    is_there_a_latrine = 'Yes' AND created_on BETWEEN dates AND dates + '59 minute 59 second'
                GROUP BY
                    DATE_TRUNC('hour', created_on)
            ) AS has_latrine";
        }

        return "
        (
            SELECT
                COUNT(DATE(created_on))
            FROM
                runs
            WHERE
                is_there_a_latrine = 'Yes' AND DATE(created_on) = DATE(dates)
            GROUP BY
                DATE(created_on)
        ) AS has_latrine";
    }

    public function hasLockableDoor()
    {
        if (request('period') == 'daily') {
            return "(
                SELECT
                    COUNT(DATE_TRUNC('hour', created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_lockable_door = 'Yes' AND created_on BETWEEN dates AND dates + '59 minute 59 second'
                GROUP BY
                    DATE_TRUNC('hour', created_on)
            ) AS has_lockable_door";
        }

        return "
        (
            SELECT
                COUNT(DATE(created_on))
            FROM
                runs
            WHERE
                does_it_have_a_lockable_door = 'Yes' AND DATE(created_on) = DATE(dates)
            GROUP BY
                DATE(created_on)
        ) AS has_lockable_door";
    }

    public function hasBrickWall()
    {
        if (request('period') == 'daily') {
            return "
            (
                SELECT
                    COUNT(DATE_TRUNC('hour', created_on))
                FROM
                    runs
                WHERE
                    does_it_have_brick_wall = 'Yes' AND created_on BETWEEN dates AND dates + '59 minute 59 second'
                GROUP BY
                    DATE_TRUNC('hour', created_on)
            ) AS has_brick_wall";
        }

        return "
        (
            SELECT
                COUNT(DATE(created_on))
            FROM
                runs
            WHERE
                does_it_have_brick_wall = 'Yes' AND DATE(created_on) = DATE(dates)
            GROUP BY
                DATE(created_on)
        ) AS has_brick_wall";
    }

    public function hasCementedFloor()
    {
        if (request('period') == 'daily') {
            return "
            (
                SELECT
                    COUNT(DATE_TRUNC('hour', created_on))
                FROM
                    runs
                WHERE
                    does_the_latrine_have_a_cemented_floor = 'Yes' AND created_on BETWEEN dates AND dates + '59 minute 59 second'
                GROUP BY
                    DATE_TRUNC('hour', created_on)
            ) AS has_cemented_floor";
        }

        return "
        (
            SELECT
                COUNT(DATE(created_on))
            FROM
                runs
            WHERE
                does_the_latrine_have_a_cemented_floor = 'Yes' AND DATE(created_on) = DATE(dates)
            GROUP BY
                DATE(created_on)
        ) AS has_cemented_floor";
    }

    public function hasIronSheetRoof()
    {
        if (request('period') == 'daily') {
            return "
            (
                SELECT
                    COUNT(DATE_TRUNC('hour', created_on))
                FROM
                    runs
                WHERE
                    has_iron_sheet_roof = 'Yes' AND created_on BETWEEN dates AND dates+'59 minute 59 second'
                GROUP BY
                    DATE_TRUNC('hour',created_on)
            ) AS has_iron_sheet_roof";
        }


        return "
        (
            SELECT
                COUNT(DATE(created_on))
            FROM
                runs
            WHERE
                has_iron_sheet_roof = 'Yes' AND DATE(created_on) = DATE(dates)
            GROUP BY
                DATE(created_on)
        ) AS has_iron_sheet_roof";

    }

    public function hasAdjacentBathroom()
    {
        if (request('period') == 'daily') {
            return "
            (
                SELECT
                    COUNT(DATE_TRUNC('hour', created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_bathroom_next_to_it = 'Yes' AND created_on BETWEEN dates AND dates + '59 minute 59 second'
                GROUP BY
                    DATE_TRUNC('hour',created_on)
            ) AS has_adjacent_bathroom";
        }

        return "
        (
            SELECT
                COUNT(DATE(created_on))
            FROM
                runs
            WHERE
                does_it_have_a_bathroom_next_to_it = 'Yes' AND DATE(created_on) = DATE(dates)
            GROUP BY
                DATE(created_on)
        ) AS has_adjacent_bathroom";
    }
}
