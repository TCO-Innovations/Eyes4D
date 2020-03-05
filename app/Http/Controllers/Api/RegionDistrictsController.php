<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RegionDistrictsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function __invoke(Request $request, $region)
    {
        return Surveys::query()->select("district as name")->distinct("district")->where("region", $region)->whereNotNull("district")->get();
    }
}
