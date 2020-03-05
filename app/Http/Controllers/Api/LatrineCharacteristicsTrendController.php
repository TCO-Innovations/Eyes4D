<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surveys;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class LatrineCharacteristicsTrendController extends Controller
{
    public function __invoke(Request $request)
    {
        $result = Surveys::query()
            ->selectRaw("to_char(benchmark_date::TIMESTAMP, 'YYYY-MM') AS benchmark_date")
            ->addSelect([
                'has_lockable_door' => function(Builder $query) {
                    $query
                        ->selectRaw("COUNT(has_lockable_door) as has_lockable_door")
                        ->from('surveys')
                        ->where("has_lockable_door", "Yes")
                        ->whereRaw("to_char(created_at::TIMESTAMP, 'YYYY-MM') = to_char(time_series.benchmark_date::TIMESTAMP, 'YYYY-MM')")
                        ->groupBy(DB::raw("to_char(created_at::TIMESTAMP, 'YYYY-MM')"))
                        ->limit(1);
                },
                'has_brick_wall' => function(Builder $query) {
                    $query
                        ->selectRaw("COUNT(has_brick_wall) as has_brick_wall")
                        ->from('surveys')
                        ->where("has_brick_wall", "Yes")
                        ->whereRaw("to_char(created_at::TIMESTAMP, 'YYYY-MM') = to_char(time_series.benchmark_date::TIMESTAMP, 'YYYY-MM')")
                        ->groupBy(DB::raw("to_char(created_at::TIMESTAMP, 'YYYY-MM')"))
                        ->limit(1);
                },
                'has_cemented_floor' => function(Builder $query) {
                    $query
                        ->selectRaw("COUNT(has_cemented_floor) as has_cemented_floor")
                        ->from('surveys')
                        ->where("has_cemented_floor", "Yes")
                        ->whereRaw("to_char(created_at::TIMESTAMP, 'YYYY-MM') = to_char(time_series.benchmark_date::TIMESTAMP, 'YYYY-MM')")
                        ->groupBy(DB::raw("to_char(created_at::TIMESTAMP, 'YYYY-MM')"))
                        ->limit(1);
                },
                'has_iron_sheet_roof' => function(Builder $query) {
                    $query
                        ->selectRaw("COUNT(has_iron_sheet_roof) as has_iron_sheet_roof")
                        ->from('surveys')
                        ->where("has_iron_sheet_roof", "Yes")
                        ->whereRaw("to_char(created_at::TIMESTAMP, 'YYYY-MM') = to_char(time_series.benchmark_date::TIMESTAMP, 'YYYY-MM')")
                        ->groupBy(DB::raw("to_char(created_at::TIMESTAMP, 'YYYY-MM')"))
                        ->limit(1);
                },
                'has_adjacent_bathroom' => function(Builder $query) {
                    $query
                        ->selectRaw("COUNT(has_adjacent_bathroom) as has_adjacent_bathroom")
                        ->from('surveys')
                        ->where("has_adjacent_bathroom", "Yes")
                        ->whereRaw("to_char(created_at::TIMESTAMP, 'YYYY-MM') = to_char(time_series.benchmark_date::TIMESTAMP, 'YYYY-MM')")
                        ->groupBy(DB::raw("to_char(created_at::TIMESTAMP, 'YYYY-MM')"))
                        ->limit(1);
                },
            ])
            ->fromSub(function (Builder $builder) {
                $builder->fromRaw("generate_series('2019-12-01'::TIMESTAMP, '2020-05-30'::TIMESTAMP, '1 month'::INTERVAL) as benchmark_date");
            }, "time_series")
            ->get();

        return Response::json($result, 200);
    }
}
