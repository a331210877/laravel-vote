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
        // $app = app('wechat');//从项目实例中得到一个oauth应用实例
        $request->app->oauth->code=session('open_id');
        dump($request->app->oauth->user());
        // dump($app);
        // $user = $app->oauth->user();
        // dump($request->session);
        dump(session('open_id'));
    }
}