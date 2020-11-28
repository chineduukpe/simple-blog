<?php

use Illuminate\Support\Facades\Route;

use \App\Models\Blog;
use \App\Models\User;
use \App\Models\TopicSubscription;

use App\Http\Controllers\APIControllers\TopicInterestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome-react');
});

Route::get('/test', [TopicInterestController::class,'create']);
