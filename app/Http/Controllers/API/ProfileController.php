<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

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

    public function updateProfile(){
        $validated_data = request()->validate([
            'name' => 'required|string'
        ]);

        $user = auth()->user();
        $user->update($validated_data);
        return [
            'messages' => ['Profile has been updated'],
            'user' => $user,
        ];
    }

    public function updatePhoto(){
        request()->validate([
            'image' => 'required|max:2000|mimes:jpg,png,jpeg,gif'
        ]);

        $upload_path = 'public/assets/img/profile/';
        $image = request()->file('image');

        $file_name = time() . rand(10000,7784893) . '.' .$image->getClientOriginalExtension();
        
        \Storage::disk('local')->put($upload_path . $file_name,\file_get_contents($image));
        
        $user = auth()->user();
        $user->profile_image_url = \str_replace('3000','8000',\Storage::disk('local')->url($upload_path.$file_name));

        $user->save();

        return [
            'user' => $user,
            'message' => ['Profile image uploaded successfully'],
        ];
        
    }
}
