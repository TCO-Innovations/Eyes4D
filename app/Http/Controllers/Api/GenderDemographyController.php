<?php

namespace App\Http\Controllers\Api;

use App\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class GenderDemographyController extends Controller
{
    public function __invoke(Request $request)
    {
        $fields = [
            "region" => "region",
            "district" => 'district',
            "village" => 'village_assigned',
        ];

        $query = Contact::query()
            ->selectRaw('COUNT(gender) AS total, gender')
            ->whereIn('gender', ['Male', 'Female'])
            ->groupBy('gender');

        if ($request->has('areaType') && $request->has('areaName')) {
            $query->where($fields[$request->get('areaType')], "LIKE", "%{$request->areaName}%");
        }

        return Response::json($query->get(), 200);
    }
}
