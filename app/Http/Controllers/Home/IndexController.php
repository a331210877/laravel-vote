<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use Session;

class IndexController extends Controller
{
    public function index(Request $request){
        // if (isset($request->code)){
        //     session(['open_id'=>$request->code]);
        //     echo session('open_id');
        // }else{
            $app = app('wechat');
            $user = $app->oauth->user();
            dump($user);
        // }
    }
}