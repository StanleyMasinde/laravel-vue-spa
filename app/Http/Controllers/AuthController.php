<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;

class AuthController extends Controller
{
    /**
     * Register a new User to the application
     * 
     */
    public function register(Request $request)
    {
        $v = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password'  => 'required|min:3|confirmed',
        ]);
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return Auth::login($user);
    }
    /**
     * Login A user
     */
    public function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

       if (Auth::attempt($credentials)) {
           return Auth::attempt($credentials);
       }  else {
           return response()->json(['message' => Lang::get('auth.failed')], 401);
       }
    }
    /**
     * Logout User
     */
    public function logout()
    {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }
    /**
     * Get User
     */
    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }
    /**
     * Refresh token
     */
    public function refresh()
    {
        if ($token = $this->guard()->refresh()) {
            return response()
                ->json(['status' => 'successs'], 200)
                ->header('Authorization', $token);
        }
        return response()->json(['error' => 'refresh_token_error'], 401);
    }
    /**
     * The default guard
     */
    private function guard()
    {
        return Auth::guard();
    }
}
