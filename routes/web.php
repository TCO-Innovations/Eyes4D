<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', function () {
    return view('welcome');
});

Route::get("home", "LatrineConstructionController")->name("latrine");
Route::get("handwash_practise", "HandwashPractiseController")->name("handwash_practise");
Route::get("handwash_behaviour", "HandwashBehaviourController")->name("handwash_behaviour");

Route::get("api/latrine_characteristics", "Api\LatrineCharacteristicsController");
Route::get("api/latrine_characteristics_trend", "Api\LatrineCharacteristicsTrendController");
Route::get("api/latrine_construction_improvement", "Api\LatrineConstructionImprovementController");
Route::get("api/visiting_per_contact", "Api\VisitingPerContactController");
Route::get("api/visiting_per_village", "Api\VisitingPerVillageController");

//Route::get('/home', 'HomeController@index')->name('home');
