<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    //
    public function index(){
        // return \App\Models\Blog::first()->toJson();
        return auth()->user()->timeline()->toJson();
    }
}
