<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Topic;

class TopicController extends Controller
{
    //
    public function index(){
        return Topic::latest()->paginate(50);
    }
}
