<?php

namespace App\Http\Controllers\Api;

use App\Surveys;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class NumberOfVillagesController extends Controller
{
    public function __invoke(Request $request)
    {
        $total = Surveys::query()
            ->selectRaw("DISTINCT village, district")
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->whereNotNull("village")
            ->where("village", "<>", "")
            ->get()
            ->count();

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
