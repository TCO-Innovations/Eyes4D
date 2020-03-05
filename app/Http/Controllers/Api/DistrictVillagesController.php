<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DistrictVillagesController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function __invoke(Request $request, $district)
    {
        return Surveys::query()
            ->select("village as name")
            ->where("district", $district)
            ->whereNotNull("village")
            ->where("village", "<>", "")
            ->distinct("village")
            ->orderBy("village", "asc")
            ->get();
    }
}
