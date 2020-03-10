<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Response;

class HouseholdVisitingController extends Controller
{
    protected $sortKey;

    protected $sortDir;

    protected $limit;

    public function __invoke(Request $request)
    {
        $response = Surveys::query()
            ->selectRaw("village, district, region, COUNT(DISTINCT contact_name) AS reporters")
            ->addSelect([
                "visited_household" => function($query) {
                    $query
                        ->selectRaw("COUNT(run_id)")
                        ->from('surveys', "s1")
                        ->whereColumn('s1.village', 'surveys.village');
                },
                "total_household" => function($query) {
                    $query
                        ->select("total_houses")
                        ->from('surveys', "s1")
                        ->whereColumn('s1.village', 'surveys.village')
                        ->limit(1);
                }
            ])
            ->groupBy(["village", "district", "region"])
            ->whereNotNull("village")
            ->where("village", "<>", "")
            ->when($request->has("sort"), function (Builder $builder) {

                $sortObject = json_decode(request('sort'), true);

                $sortKey = array_key_first($sortObject);

                $sortDirection = $sortObject[$sortKey];

                $builder->orderBy($sortKey, $sortDirection);
            })
            ->when($this->isAreaFilterable($request), function (Builder $query){
                $query->where(request("areaType"), request("areaName"));
            })
            ->limit($request->get("limit", 5))
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
