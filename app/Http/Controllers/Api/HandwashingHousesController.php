<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HandwashingHousesController extends Controller
{
    public function __invoke()
    {
        return collect(DB::select($this->queryBuilder()));
    }

    public function queryBuilder()
    {
        return "SELECT" . " {$this->columns()} FROM {$this->table()} WHERE {$this->whereClause()} {$this->groupByClause()}";
    }

    public function groupByClause()
    {
        if (request()->has('region') && request('region')) {

            return "GROUP BY region";
        }

        if (request()->has('district') && request('district')) {

            return "GROUP BY district";
        }

        if (request()->has('village') && request('village')) {

            return "GROUP BY village";
        }

        return "";
    }

    public function table()
    {
        return "runs_view";
    }

    public function columns()
    {
        return "{$this->subTotal()}, {$this->total()}";
    }

    public function subTotal()
    {
        return "COUNT(region) AS sub_total";
    }

    public function total()
    {
        if (request()->has('region') && request('region')) {

            $query = Str::lower(trim(request('region')));

            return "(SELECT COUNT(region) FROM runs_view WHERE LOWER(region) LIKE '%{$query}%' GROUP BY region) AS total";
        }

        if (request()->has('district') && request('district')) {

            $query = Str::lower(trim(request('district')));

            return "(SELECT COUNT(district) FROM runs_view WHERE LOWER(district) LIKE '%{$query}%' GROUP BY district) AS total";
        }

        if (request()->has('village') && request('village')) {

            $query = Str::lower(trim(request('village')));

            return "(SELECT COUNT(village) FROM runs_view WHERE LOWER(village) LIKE '%{$query}%' GROUP BY village) AS total";
        }

        return "(SELECT COUNT(region) FROM runs_view) AS total";
    }

    public function whereClause()
    {
        if (request()->has('region') && request('region')) {

            $query = Str::lower(trim(request('region')));

            return "has_handwash_place = 'Yes' AND LOWER(region) LIKE '%{$query}%'";
        }

        if (request()->has('district') && request('district')) {

            $query = Str::lower(trim(request('district')));

            return "has_handwash_place = 'Yes' AND LOWER(district) LIKE '%{$query}%'";
        }

        if (request()->has('village') && request('village')) {

            $query = Str::lower(trim(request('village')));

            return "has_handwash_place = 'Yes' AND LOWER(village) LIKE '%{$query}%'";
        }

        return "has_handwash_place = 'Yes'";
    }
}
