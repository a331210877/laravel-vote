<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;
use Storage;
use Illuminate\Support\Facades\Redis;

class TestController extends Controller
{
    public function index(Request $request)
    {
        $redis = Redis::connection();
        $redis->incr('h');
        echo $redis->get('h');
    }
}