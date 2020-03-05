<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class AgeDemographyController extends Controller
{
    public function __invoke(Request $request)
    {
        return Surveys::query()
            ->select([
                "contact_name",
                "contact_age",
                "contact_birthday",
                "contact_age_in_years"
            ])
            ->distinct("contact_name")
            ->when($request->filled('start') && $request->filled('stop'), function(Builder $query) {
                $query->whereBetween("created_at", [request('start'), request('stop')]);
            })
            ->get();
    }
}
