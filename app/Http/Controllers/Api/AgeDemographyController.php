<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class AgeDemographyController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Surveys::query()
            ->select(["contact_name", "contact_age", "contact_birthday", "contact_age_in_years"])
            ->distinct("contact_name")
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->get();

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
