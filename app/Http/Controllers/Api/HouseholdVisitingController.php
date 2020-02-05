<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class HouseholdVisitingController extends Controller
{
    protected $sortKey;

    protected $sortDir;

    protected $limit;

    public function __invoke(Request $request)
    {
        $sort = json_decode($request->get('sort'), true);

        $this->sortKey = array_key_first($sort);

        $this->sortDir = $sort[$this->sortKey];

        $this->limit = $request->get('limit');

        return collect(\DB::select($this->queryBuilder()));
    }

    public function queryBuilder()
    {
        return "SELECT {$this->columns()} {$this->table()} {$this->groupByClause()} {$this->orderByClause()} LIMIT {$this->limit}";
    }

    public function columns()
    {
        return "region, district, assigned_village AS village, COUNT(DISTINCT contact_name) AS reporters, (SELECT houses FROM surveys WHERE region=s1.region AND district=s1.district AND assigned_village=s1.assigned_village LIMIT 1)AS houses,COUNT(run_id)AS visited_houses";
    }

    public function table()
    {
        return "FROM surveys s1";
    }

    public function groupByClause()
    {
        return "GROUP BY region, district, assigned_village";
    }

    public function orderByClause()
    {
        return "ORDER BY {$this->sortKey} {$this->sortDir}";
    }
}
