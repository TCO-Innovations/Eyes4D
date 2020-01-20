<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LatrineConstructionImprovementController extends Controller
{
    public function __invoke(Request $request)
    {
        return collect(DB::select($this->queryBuilder()));
    }

    public function queryBuilder()
    {
        return "SELECT " . $this->columns() . " FROM " . $this->table();
    }

    public function table()
    {
        return "runs";
    }

    public function columns()
    {
        return "
            {$this->id()},
            {$this->headOfHouse()},
            {$this->hasLatrine()},
            {$this->hasLockableDoor()},
            {$this->hasBrickWall()},
            {$this->hasCementedFloor()},
            {$this->hasIronSheetRoof()},
            {$this->hasAdjacentBathroom()},
            {$this->cleanLatrine()},
            {$this->hasHandWashPlace()},
            {$this->hasHandWashContainer()},
            {$this->hasSoap()}
        ";
    }

    public function id()
    {
        return "id";
    }

    public function headOfHouse()
    {
        return "head_of_house";
    }

    public function hasLatrine()
    {
        return "(CASE WHEN is_there_a_latrine = 'Yes' THEN 1 ELSE 0 END) AS has_latrine";
    }

    public function hasLockableDoor()
    {
        return "(CASE WHEN does_it_have_a_lockable_door = 'Yes' THEN 1 ELSE 0 END) AS has_lockable_door";
    }

    public function hasBrickWall()
    {
        return "(CASE WHEN does_it_have_brick_wall = 'Yes' THEN 1 ELSE 0 END) AS has_brick_wall";
    }

    public function hasCementedFloor()
    {
        return "(CASE WHEN does_the_latrine_have_a_cemented_floor = 'Yes' THEN 1 ELSE 0 END) AS has_cemented_floor";
    }

    public function hasIronSheetRoof()
    {
        return "(CASE WHEN has_iron_sheet_roof = 'Yes' THEN 1 ELSE 0 END) AS has_iron_sheet_roof";
    }

    public function hasAdjacentBathroom()
    {
        return "(CASE WHEN does_it_have_a_bathroom_next_to_it = 'Yes' THEN 1 ELSE 0 END) AS has_adjacent_bathroom";
    }

    public function cleanLatrine()
    {
        return "(CASE WHEN kinyesi_ukutani = 'No' AND kinyesi_kuzunguka_nyumba = 'No' THEN 1 ELSE 0 END) AS clean_latrine";
    }

    public function hasHandWashPlace()
    {
        return "(CASE WHEN place_for_hand_washing = 'Yes' THEN 1 ELSE 0 END) AS has_handwash_place";
    }

    public function hasHandWashContainer()
    {
        return "(CASE WHEN container_for_hand_washing = 'Yes' THEN 1 ELSE 0 END) AS has_handwash_container";
    }

    public function hasSoap()
    {
        return "(CASE WHEN is_there_soap = 'Yes' THEN 1 ELSE 0 END) AS has_soap";
    }
}
