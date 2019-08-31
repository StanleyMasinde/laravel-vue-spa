<?php

namespace App\Http\Controllers\Application;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    /**
     * All routes are redirected to the welcome view
     * 
     * @return View
     */
    public function index()
    {
        return view('welcome');
    }
}
