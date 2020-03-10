<?php

namespace App\Http\Controllers\Api;

use App\Contact;
use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use function foo\func;

class GenderDemographyController extends Controller
{
    public function __invoke(Request $request)
    {
        $total = Surveys::query()
            ->selectRaw("DISTINCT contact_name, contact_gender")
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->whereNotNull("contact_name")
            ->whereIn("contact_gender", ['male', 'female'])
            ->groupBy(["contact_name", "contact_gender", "region", "district", "village"])
            ->get()
            ->countBy(function ($contact){
                return $contact->contact_gender;
            })
            ->flatMap(function ($gender, $key) {
                return [["gender" => Str::title($key), "total" => $gender]];
            });

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
