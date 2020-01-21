<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HandwashingCharacteristicsController extends Controller
{
    public function __invoke()
    {
        return collect(DB::select($this->queryBuilder()));
    }

    public function queryBuilder()
    {
        return "SELECT " . $this->columns() . " FROM runs_view " . $this->whereClause();
    }

    public function columns()
    {
        return "
            {$this->hasHandwashPlace()},
            {$this->hasSoap()},
            {$this->hasHandwashContainer()},
            {$this->total()}
        ";
    }

    public function hasHandwashPlace()
    {
        return "COUNT(*) FILTER (WHERE has_handwash_place = 'Yes') AS has_handwash_place";
    }

    public function hasSoap()
    {
        return "COUNT(*) FILTER (WHERE has_soap = 'Yes') AS has_soap";
    }

    public function hasHandwashContainer()
    {
        return "COUNT(*) FILTER (WHERE has_handwash_container = 'Yes') AS has_handwash_container";
    }

    public function total()
    {
        return "COUNT(*) AS total";
    }

    public function whereClause()
    {
        return "WHERE LOWER(district) = 'mbarali dc'";
    }
}
