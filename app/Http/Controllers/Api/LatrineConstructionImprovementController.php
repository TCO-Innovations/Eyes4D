<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LatrineConstructionImprovementController extends Controller
{
    public function __invoke(Request $request)
    {
        $area = [
            "region" => "region",
            "district" => "district",
            "village" => "village_name",
        ];

        $query = Surveys::query();

        if($request->has('areaType') && $request->has('areaName')) {

            $field = $area[$request->get('areaType')];

            $value = $field == 'region' ? $request->get('areaName') : Str::lower($request->get('areaName'));

            $query->where($field, 'LIKE', "%{$value}%");
        }

        $query->whereBetween('created_at', [request('start', '2019-12-01'), request('stop', '2020-04-30')]);

        return $query->paginate();


    }
}
