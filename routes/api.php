<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use \App\Http\Controllers\API\ProfileController as PC;
use \App\Http\Controllers\API\TopicInterestController as TIC;

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
    Route::post('/register','AuthController@register');
    Route::post('/login','AuthController@login');
    
    Route::group(['middleware' => ['auth:api']],function(){
        Route::post('/logout','AuthController@logout');
        Route::get('/profile','ProfileController@index');

        // Add new Interest Topic
        Route::post('/user/topics',[TIC::class,'create']);

        Route::get('/user/topics',function(){
            return response([
                'topics' => auth()->user()->topics()
            ]);
        });
        
        Route::get('/test', function () {
            return ['user' => auth()->user(),
                    'topics' => auth()->user()->topics()
                    ];
        
        });
    });
    
});


