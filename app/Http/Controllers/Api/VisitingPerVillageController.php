<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VisitingPerVillageController extends Controller
{
    public function __invoke(Request $request)
    {
        return collect(DB::select($this->queryBuilder()));
    }

    public function queryBuilder()
    {
        return "SELECT " . "{$this->columns()} FROM runs_view GROUP BY village, district {$this->orderBy()}, {$this->paginate()}";
    }

    public function columns()
    {
        return "village, district, COUNT(village) AS visits";
    }

    public function paginate()
    {
        $limit = request('take', 5);

        return "visits LIMIT {$limit}";
    }

    public function orderBy()
    {
        $order = request('order', 'desc');

        return "ORDER BY visits {$order}";
    }
}
