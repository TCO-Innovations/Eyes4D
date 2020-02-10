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

            "numberOfUReporters" => $this->numberOfUReporters(),
            "numberOfVillages" => $this->numberOfVillages(),
            "numberOfVisitedHouseholds" => $this->numberOfVisitedHouseholds(),
            "totalNumberOfHouseholds" => $this->totalNumberOfHouseholds(),
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

    public function numberOfUReporters()
    {
        return collect(DB::select("SELECT COUNT(DISTINCT LOWER(name)) AS total FROM contacts"))->first()->total;
    }

    public function numberOfVillages()
    {
        return collect(DB::select("SELECT COUNT(DISTINCT LOWER(village_name)) AS total FROM surveys"))->first()->total;
    }

    public function numberOfVisitedHouseholds()
    {
        return collect(DB::select("SELECT COUNT(*) AS total FROM surveys"))->first()->total;
    }

    public function totalNumberOfHouseholds()
    {
        return collect(DB::select("SELECT SUM(houses) AS total FROM villages"))->first()->total;
    }
}
