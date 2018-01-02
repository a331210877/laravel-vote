<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use Session;

class IndexController extends Controller
{
    // dump(session('wechat.oauth_user'));
    public function getCarousel(){
        $select_row=DB::table('carousel')->where('status',0)->get();
        return responseToJson(1,"查询成功",$select_row);
    }

    public function getPage(){
        $select_row=DB::table('page')->where('status',0)->get();
        return responseToJson(1,"查询成功",$select_row);
    }

    public function getUserInfo(){
        $select_row=session('wechat.oauth_user');
        return responseToJson(1,"查询成功",$select_row);
    }

}