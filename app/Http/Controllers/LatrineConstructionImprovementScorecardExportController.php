<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\LatrineConstructionImprovementScorecardExport;

class LatrineConstructionImprovementScorecardExportController extends Controller
{
    public function __invoke(Request $request)
    {
        return Excel::download(new LatrineConstructionImprovementScorecardExport, 'survey.xlsx');
    }
}
