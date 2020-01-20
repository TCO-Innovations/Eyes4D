<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RegionDistrictsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index($region)
    {
        $query = "SELECT DISTINCT district AS name FROM contacts WHERE region <> '' AND district <> '' AND region LIKE '%{$region}%'";

        return collect(DB::select($query));
    }
}
