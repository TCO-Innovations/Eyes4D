<?php

namespace App\Http\Controllers;

use App\Rules\MatchPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class PasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function __invoke(Request $request)
    {
        $this->validate($request, [
            "password_old" => ["required", new MatchPassword],
            "password" => ["required", "confirmed"],
            "password_confirmation" => ["required"],
        ]);

        Auth::user()->update([
            "password" => Hash::make(\request("password"))
        ]);

        return Response::noContent();
    }
}
