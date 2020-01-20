<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HandwashBehaviourController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render("HandwashingBehaviour/Index", [
            "regions" => $this->regions(),
        ]);
    }

    public function regions()
    {
        $query = "SELECT DISTINCT region AS id, REPLACE(region,'Tanzania >','') as name FROM contacts WHERE region <> ''";

        return collect(DB::select($query));
    }
}
