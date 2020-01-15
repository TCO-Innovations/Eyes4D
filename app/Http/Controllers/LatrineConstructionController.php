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
            "metrics" => [
                "consolidation" => $this->consolidationMetrics(),
                "latrines" => $this->latrineMetrics(),
            ]
        ]);
    }


    public function consolidationMetrics()
    {
        $query = "SELECT id, name, village_assigned AS village, ( SELECT COUNT(contact_uuid) FROM runs WHERE contact_uuid = uuid GROUP by contact_uuid) as visits FROM contacts";

        return collect(DB::select($query))->map(function ($item) {
            return [
                "name" => Str::title($item->name),
                "visits" => $item->visits ?? 0
            ];
        });
    }

    public function latrineMetrics()
    {
        $query = "SELECT COUNT(is_there_a_latrine) AS latrine_count FROM runs WHERE is_there_a_latrine = 'Yes'";

        return collect(DB::select($query));
    }
}
