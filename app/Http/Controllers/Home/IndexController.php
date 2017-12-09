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
        $app = app('wechat');//从项目实例中得到一个oauth应用实例
        $oauth = $app->oauth;//得到joomla当前用户
        $user= $oauth->user();
        dump($app);
        dump($oauth);
        dump($user);
        dump(session('open_id'));
    }
}