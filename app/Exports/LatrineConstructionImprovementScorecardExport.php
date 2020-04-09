<?php

namespace App\Exports;

use App\Surveys;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

class LatrineConstructionImprovementScorecardExport implements FromCollection
{
    /**
    * @return Collection
    */
    public function collection()
    {
        return Surveys::all();
    }
}
