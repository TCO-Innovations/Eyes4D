<?php

namespace App\Http\Controllers;

use App\Surveys;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HandwashBehaviourController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function __invoke(Request $request)
    {
        return Inertia::render("HandwashingBehaviour/Index", [
            "regions" => Surveys::query()
                ->select("region as name")
                ->distinct('region')
                ->whereNotNull("region")
                ->get()
        ]);
    }
}
