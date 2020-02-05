<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class LatrineConstructionController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function __invoke(Request $request)
    {
        return Inertia::render("LatrineConstruction/Index", [
            "regions" => $this->regions(),
            "totalHouseholds" => $this->totalHouseholds(),
            "visitedHouseholds" => $this->visitedHouseholds(),
            "houseWithLatrine" => $this->houseWithLatrine(),
        ]);
    }


    public function regions()
    {
        $query = "SELECT DISTINCT region AS id, REPLACE(region,'Tanzania >','') as name FROM contacts WHERE region <> ''";

        return collect(DB::select($query));
    }

    public function totalHouseholds()
    {
        return DB::table('villages')->sum('houses');
    }

    public function visitedHouseholds()
    {
        return DB::table('surveys')->count();
    }

    public function houseWithLatrine()
    {
        return DB::table('surveys')->where('has_latrine', 'Yes')->count();
    }
}
