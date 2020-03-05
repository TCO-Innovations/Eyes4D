<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', "Auth\LoginController@showLoginForm");

Route::get("home", "LatrineConstructionController")->name("latrine");
Route::get("handwash_practise", "HandwashPractiseController")->name("handwash_practise");
Route::get("handwash_behaviour", "HandwashBehaviourController")->name("handwash_behaviour");

Route::get("api/house_with_latrine", "Api\HouseWithLatrineController");
Route::get("api/latrine_characteristics", "Api\LatrineCharacteristicsController");
Route::get("api/latrine_characteristics_trend", "Api\LatrineCharacteristicsTrendController");
Route::get("api/latrine_construction_improvement", "Api\LatrineConstructionImprovementController");
Route::get("api/visiting_per_contact", "Api\VisitingPerContactController");
Route::get("api/visiting_per_village", "Api\VisitingPerVillageController");
Route::get("api/regions/{region}/districts", "Api\RegionDistrictsController@index");
Route::get("api/districts/{district}/villages", "Api\DistrictVillagesController@index");
Route::get("/api/latrine_type_distribution", "Api\LatrineTypeDistributionController");

Route::get("api/handwashing_houses", "Api\HandwashingHousesController");
Route::get("api/handwashing_characteristics", "Api\HandwashingCharacteristicsController");
Route::get("api/household_visiting", "Api\HouseholdVisitingController");
Route::get("api/villages/{village}/contacts", "Api\VillageContactsController");


Route::get("api/number_of_u_reporters", "Api\NumberOfUReportersController");
Route::get("api/number_of_villages", "Api\NumberOfVillagesController");
Route::get("api/visited_household", "Api\VisitedHouseholdController");
Route::get("api/total_number_of_households", "Api\TotalNumberOfHouseholdsController");
Route::get("api/gender_demography", "Api\GenderDemographyController");
Route::get("api/age_demography", "Api\AgeDemographyController");

Route::get("users", "UsersController@index")->name('users.index');
Route::post("users", "UsersController@store")->name('users.store');
Route::put("users/{user}", "UsersController@update")->name('users.update');
Route::delete("users/{user}", "UsersController@destroy")->name('users.destroy');

Route::put("self/password", "PasswordController");
Route::put("self/profile", "ProfileController");
