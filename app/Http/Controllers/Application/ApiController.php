<?php

namespace App\Http\Controllers\Application;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    /**
     * The default route in the api namespace
     * 
     * @return App\User
     */
    public function index(Request $request)
    {
        return $request->user();
    }

    /**
     * Handle login
     * After login this method will return a token that the user can use
     * 
     * @return Auth
     */
    public function login(Request $request)
    {
        //
    }

    /**
     * Handle registartion
     * After registarion this method will generate a token that will be used to 
     *  return a token that will be used to authenticate
     * 
     * @return Auth
     */
    public function register(Request $request)
    {
        //
    }
}
