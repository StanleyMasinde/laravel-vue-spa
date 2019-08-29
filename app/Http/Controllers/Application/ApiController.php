<?php

namespace App\Http\Controllers\Application;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    /**
     * The default route in the api namespace
     * 
     */
    public function index(Request $request)
    {
        return $request->user();
    }
}
