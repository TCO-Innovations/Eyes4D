<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LatrineCharacteristicsTrendController extends Controller
{
    public function __invoke(Request $request)
    {
        return collect(DB::select($this->queryBuilder()));
    }

    public function table()
    {
        $start  = Carbon::parse(request('date'))->startOfYear()->toDateTimeString();
        $stop   = Carbon::parse(request('date'))->endOfYear()->toDateTimeString();
        $step   = "1 month";

        if (request("period") == "annually") {
            $start  = Carbon::parse(request('date'))->startOfYear()->toDateTimeString();
            $stop   = Carbon::parse(request('date'))->endOfYear()->toDateTimeString();
            $step   = "1 month";
        }

        if (request("period") == "monthly") {
            $start  = Carbon::parse(request('date'))->startOfMonth()->toDateTimeString();
            $stop   = Carbon::parse(request('date'))->endOfMonth()->toDateTimeString();
            $step   = "1 day";
        }

        if (request("period") == "daily") {
            $start  = Carbon::parse(request('date'))->startOfDay()->toDateTimeString();
            $stop   = Carbon::parse(request('date'))->endOfDay()->toDateTimeString();
            $step   = "1 hour";
        }

        return "generate_series('{$start}'::TIMESTAMP, '$stop'::TIMESTAMP, '{$step}'::INTERVAL) AS dates";
    }

    public function columns()
    {
        return "
            dates,
            to_char(dates, 'HH24') as hour,
            to_char(dates::TIMESTAMP, 'DD') AS day,
            to_char(dates::TIMESTAMP, 'Mon') AS month,
            {$this->hasLatrine()},
            {$this->hasLockableDoor()},
            {$this->hasBrickWall()},
            {$this->hasCementedFloor()},
            {$this->hasIronSheetRoof()},
            {$this->hasAdjacentBathroom()}
        ";
    }

    public function queryBuilder()
    {
        return "SELECT {$this->columns()} FROM {$this->table()}";
    }

    public function hasLatrine()
    {
        if (request('period') == "annually") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    is_there_a_latrine = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM') = to_char(dates::TIMESTAMP, 'YYYY-MM')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM')
            ) AS has_latrine";
        }

        if (request('period') == "monthly") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    is_there_a_latrine = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM-DD') = to_char(dates::TIMESTAMP, 'YYYY-MM-DD')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_latrine";
        }

        if (request("period") == "daily") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    is_there_a_latrine = 'Yes' AND date_trunc('HOUR', created_on::TIMESTAMP) = date_trunc('HOUR', dates::TIMESTAMP)
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_latrine";
        }
    }

    public function hasLockableDoor()
    {
        if (request("period") == "annually") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_lockable_door = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM') = to_char(dates::TIMESTAMP, 'YYYY-MM')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM')
            ) AS has_lockable_door";
        }

        if (request("period") == "monthly") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_lockable_door = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM-DD') = to_char(dates::TIMESTAMP, 'YYYY-MM-DD')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_lockable_door";
        }

        if (request("period") == "daily") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_lockable_door = 'Yes' AND date_trunc('HOUR', created_on::TIMESTAMP) = date_trunc('HOUR', dates::TIMESTAMP)
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_lockable_door";
        }
    }

    public function hasBrickWall()
    {
        if (request("period") == "annually") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_brick_wall = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM') = to_char(dates::TIMESTAMP, 'YYYY-MM')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM')
            ) AS has_brick_wall";
        }

        if (request("period") == "monthly") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_brick_wall = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM-DD') = to_char(dates::TIMESTAMP, 'YYYY-MM-DD')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_brick_wall";
        }

        if (request("period") == "daily") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_brick_wall = 'Yes' AND date_trunc('HOUR', created_on::TIMESTAMP) = date_trunc('HOUR', dates::TIMESTAMP)
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_brick_wall";
        }
    }

    public function hasCementedFloor()
    {
        if(request("period") == "annually") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_the_latrine_have_a_cemented_floor = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM') = to_char(dates::TIMESTAMP, 'YYYY-MM')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM')
            ) AS has_cemented_floor";
        }

        if(request("period") == "monthly") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_the_latrine_have_a_cemented_floor = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM-DD') = to_char(dates::TIMESTAMP, 'YYYY-MM-DD')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_cemented_floor";
        }

        if(request("period") == "daily") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_the_latrine_have_a_cemented_floor = 'Yes' AND date_trunc('HOUR', created_on::TIMESTAMP) = date_trunc('HOUR', dates::TIMESTAMP)
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_cemented_floor";
        }
    }

    public function hasIronSheetRoof()
    {
        if(request("period") == "annually") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    has_iron_sheet_roof = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM') = to_char(dates::TIMESTAMP, 'YYYY-MM')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM')
            ) AS has_iron_sheet_roof";
        }

        if(request("period") == "monthly") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    has_iron_sheet_roof = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM-DD') = to_char(dates::TIMESTAMP, 'YYYY-MM-DD')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_iron_sheet_roof";
        }

        if(request("period") == "daily") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    has_iron_sheet_roof = 'Yes' AND date_trunc('HOUR', created_on::TIMESTAMP) = date_trunc('HOUR', dates::TIMESTAMP)
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_iron_sheet_roof";
        }
    }

    public function hasAdjacentBathroom()
    {
        if (request("period") == "annually") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_bathroom_next_to_it = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM') = to_char(dates::TIMESTAMP, 'YYYY-MM')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM')
            ) AS has_adjacent_bathroom";
        }

        if (request("period") == "monthly") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_bathroom_next_to_it = 'Yes' AND to_char(created_on::TIMESTAMP, 'YYYY-MM-DD') = to_char(dates::TIMESTAMP, 'YYYY-MM-DD')
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_adjacent_bathroom";
        }

        if (request("period") == "daily") {
            return "
            (
                SELECT
                    COUNT(DATE(created_on))
                FROM
                    runs
                WHERE
                    does_it_have_a_bathroom_next_to_it = 'Yes' AND date_trunc('HOUR', created_on::TIMESTAMP) = date_trunc('HOUR', dates::TIMESTAMP)
                GROUP BY
                    to_char(created_on::TIMESTAMP, 'YYYY-MM-DD')
            ) AS has_adjacent_bathroom";
        }
    }
}
