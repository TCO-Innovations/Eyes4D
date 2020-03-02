<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Inertia::render("Users/Index", [
            "users" => User::query()->latest()->get(),
            "regions" => $this->regions()
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            "name" => ["required"],
            "email" => ["required", "email"],
            "role" => ["required"],
        ]);

        $user = new User([
            "password" => Hash::make("password"),
            "name" => request("name"),
            "email" => request("email"),
            "role" => request("role"),
        ]);

        $user->save();

        if (request('role') == 'administrator') {
            $user->update(["permissions" => [
                "contacts_view" => true,
                "users_view" => true,
                "users_create" => true,
                "users_edit" => true,
                "users_delete" => true,
                "reports_view" => true
            ]]);
        } else {
            $user->update(["permissions" => ["reports_view" => true]]);
        }

        return Response::noContent();
    }

    public function update(User $user, Request $request)
    {
        $this->validate($request, [
            "name" => ["required"],
            "email" => ["required", "email"],
            "role" => ["required"],
        ]);

        $user->update([
            "password" => Hash::make("password"),
            "name" => request("name"),
            "email" => request("email"),
            "role" => request("role"),
        ]);

        if (request('role') == 'administrator') {
            $user->update(["permissions" => [
                "contacts_view" => true,
                "users_view" => true,
                "users_create" => true,
                "users_edit" => true,
                "users_delete" => true,
                "reports_view" => true
            ]]);
        } else {
            $user->update(["permissions" => ["reports_view" => true]]);
        }

        return Response::noContent();
    }

    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::back();
    }

    public function regions()
    {
        $query = "SELECT DISTINCT region AS id, REPLACE(region,'Tanzania >','') as name FROM contacts WHERE region <> ''";

        return collect(DB::select($query));
    }
}
