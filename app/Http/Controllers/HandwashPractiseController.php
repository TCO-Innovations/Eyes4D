<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HandwashPractiseController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render("HandwashingPractice/Index");
    }
}
