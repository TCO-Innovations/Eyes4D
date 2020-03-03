<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function __invoke(Request $request)
    {
        Auth::user()->update($this->validate($request, [
            "name" => ["required"],
            "email" => ["required"],
        ]));

        return Response::noContent();
    }
}
