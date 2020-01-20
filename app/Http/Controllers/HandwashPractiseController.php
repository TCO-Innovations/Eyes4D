<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HandwashPractiseController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render("HandwashingPractice/Index");
    }

    public function regions()
    {
        $query = "SELECT DISTINCT region AS id, REPLACE(region,'Tanzania >','') as name FROM contacts WHERE region <> ''";

        return collect(DB::select($query));
    }
}
