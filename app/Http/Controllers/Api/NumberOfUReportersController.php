<?php

namespace App\Http\Controllers\Api;

use App\Contact;
use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class NumberOfUReportersController extends Controller
{
    public function __invoke(Request $request)
    {
        $query = Contact::query()->distinct('username');

        if ($request->has('areaType') && $request->has('areaName')) {
            $query->whereHas("surveys", function ($query) {
                $this->areaFilter($query);
            });
        }

        return Response::json($query->count(), 200);
    }

    private function areaFilter($query)
    {
        $area = [
            "region" => "region",
            "village" => "assigned_village",
            "district" => "district"
        ];

        $field = $area[request('areaType')];

        $value = request('areaType') == 'region' ? request('areaName') : Str::lower(request('areaName'));

        if (request()->has('areaType') && request()->has('areaName')) {
            return $query->where($field, 'LIKE', "%{$value}%");
        }
    }
}
