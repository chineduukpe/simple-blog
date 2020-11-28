<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use \App\Http\Controllers\API\ProfileController as PC;
use \App\Http\Controllers\API\TopicInterestController as TIC;
use \App\Http\Controllers\API\TopicController as TC;
use \App\Http\Controllers\API\AuthController as AC;
use \App\Http\Controllers\API\BlogController as BC;

use App\Models\Topic;
use App\Models\TopicSubscription;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => '/v1'],function(){
    Route::post('/register',[AC::class,'register']);
    Route::post('/login',[AC::class,'login']);

    
    Route::group(['middleware' => ['auth:api']],function(){
        Route::post('/logout',[AC::class, 'logout']);
        Route::get('/profile','ProfileController@index');
        Route::get('/blogs',[BC::class,'index']);
        
        // Add new Interest Topic
        // Route::post('/user/topics',[App\TopicInterestController::class,'create']);
        Route::post('/user/topics',[TIC::class,'create']);

        Route::get('/user/topics',[TIC::class,'index']);

        Route::delete('/user/topics',[TIC::class,'destroy']);

        Route::get('/topics',[TC::class,'index']);

        Route::post('/user/profile/image',[PC::class,'updatePhoto']);
        Route::post('/user/profile',[PC::class,'updateProfile']);
        
        Route::get('/test', function () {
            return ['user' => auth()->user(),
                    'topics' => auth()->user()->topics()
                    ];
        
        });
    });
    
});


