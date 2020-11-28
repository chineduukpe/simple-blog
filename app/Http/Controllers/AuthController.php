<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    //
    public function register(Request $request){
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|min:7|unique:users',
            'password' => 'required|string|min:8',
            'passwordconfirmation' => 'required|string|min:8|same:password'
         ]);

        $validatedData['password'] = \bcrypt($validatedData['password']);

        $user = User::create($validatedData);
        // $accessToken = $user->createToken('authToken')->accessToken;

        return response([
            'message' => ['Registration was successful. Please verify your email to continue'],
        ],200);
    }

    public function login(Request $request){
        
        $validatedData = $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);

        $user = auth()->attempt($validatedData);

        if (!$user) {
            return response(['errors' => ['invalid_credentials' => ['Invalid login credentials']]],401);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $user =  auth()->user();
        $user->topics = $user->topics();

        return response(
            [
                'user' => $user,
                'access_token' => $accessToken,
                'message' => ['Authentication successful. welcome back.']]);
    }

    public function logout(Request $request){
        
        $request->user()->token()->revoke();
        return response([
            'message' => ['You are signed out. Come back soon.'] 
        ]);
    }
}
