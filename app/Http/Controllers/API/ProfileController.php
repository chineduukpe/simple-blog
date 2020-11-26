<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //
    public function index(){
        $user = auth()->user();
        $topics = auth()->user()->topics();
        return [
            'user' => $user,
            'topics' => $topics,
        ];
    }

    public function addInterest(){
        return response(['done']);
    }
}
