<?php

namespace App\Http\Controllers\Api;

use App\Contact;
use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class NumberOfUReportersController extends Controller
{
    public function __invoke(Request $request)
    {
        $total = Surveys::query()
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->distinct("contact_name")
            ->whereNotNull("contact_name")
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
