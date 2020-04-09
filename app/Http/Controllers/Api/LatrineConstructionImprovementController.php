<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class LatrineConstructionImprovementController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Surveys::query()
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->when($request->filled('start') && $request->filled('stop'), function(Builder $query) {
                $query->whereBetween("created_at", [request('start'), request('stop')]);
            })
            ->paginate(request("perPage"));

        return Response::json($response, 200);
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
