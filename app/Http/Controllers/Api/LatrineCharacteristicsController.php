<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LatrineCharacteristicsController extends Controller
{
    public function __invoke(Request $request)
    {
        return Surveys::query()
            ->select([
                "has_latrine",
                "has_lockable_door",
                "has_brick_wall",
                "has_cemented_floor",
                "has_iron_sheet_roof",
                "has_adjacent_bathroom"
            ])
            ->when($request->filled('start') && $request->filled('stop'), function(Builder $query) {
                $query->whereBetween("created_at", [request('start'), request('stop')]);
            })
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->get();
    }

    /**
     * @param Request $request
     * @return bool
     */
    public function isAreaFilterable(Request $request)
    {
        return $request->areaType && $request->areaName;
    }
}
