<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use App\Village;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class TotalNumberOfHouseholdsController extends Controller
{
    public function __invoke(Request $request)
    {
        $total = Surveys::query()
            ->selectRaw("DISTINCT village, district, total_houses")
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->whereNotNull("village")
            ->where("village", "<>", "")
            ->groupBy(["village", "district", "total_houses"])
            ->get()
            ->sum("total_houses");

        return Response::json($total, 200);
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
