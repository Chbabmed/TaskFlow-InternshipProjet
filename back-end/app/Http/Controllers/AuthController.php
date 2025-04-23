<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public  function  login (Request $request)
    {
        /*return response()->json([
            'message' => 'sss'
        ], 200);*/
        $credentials    =   $request->only('email', 'password');

        if (! Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'User not found'
            ], 401);
        }

        $user   = User::where('email', $request->email)->firstOrFail();
        $token  = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message'       => 'Login success',
            'access_token'  => $token,
            'token_type'    => 'Bearer',
            'user' => $user
        ]);
    }

    public  function  logout(Request $request)
    {

        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => "Logout successfull"
  ],200);



    }
}
