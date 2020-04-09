<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VillageContactsController extends Controller
{
    public function __invoke($village)
    {
        return DB::table('surveys')->distinct('contact_name')->where('village', $village)->get();
    }
}
