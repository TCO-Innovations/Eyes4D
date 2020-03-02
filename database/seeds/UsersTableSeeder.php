<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            "name" => "Administrator",
            "email" => "admin@eyes4d.or.tz",
            "role" => "administrator",
            "permissions" => [
                "contacts_view" => true,
                "users_view" => true,
                "users_create" => true,
                "users_edit" => true,
                "users_delete" => true,
            ]
        ]);
    }
}
