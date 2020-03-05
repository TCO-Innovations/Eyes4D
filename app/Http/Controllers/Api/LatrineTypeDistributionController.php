<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class LatrineTypeDistributionController extends Controller
{
    public function __invoke(Request $request)
    {
        return Surveys::query()
            ->when($request->filled('start') && $request->filled('stop'), function(Builder $query) {
                $query->whereBetween("created_at", [request('start'), request('stop')]);
            })
            ->get();
    }
}
