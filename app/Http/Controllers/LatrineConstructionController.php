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
        ]);
    }


    public function regions()
    {
        $query = "SELECT DISTINCT region AS id, REPLACE(region,'Tanzania >','') as name FROM contacts WHERE region <> ''";

        return collect(DB::select($query));
    }
}
