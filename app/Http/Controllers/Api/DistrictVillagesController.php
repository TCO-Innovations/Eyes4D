<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DistrictVillagesController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index($district)
    {
        $query = "SELECT DISTINCT village_assigned AS name FROM contacts WHERE region <> '' AND district <> '' AND district LIKE '%{$district}%'";

        return collect(DB::select($query));
    }
}
