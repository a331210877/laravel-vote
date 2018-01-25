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
        $select_row=DB::table('page')->join('user','page.user_id','=','user.id')->where('page.status',0)->get();
        return responseToJson(1,"查询成功",$select_row);
    }

    public function getUserInfo(){
        $user = session('wechat.oauth_user'); // 拿到授权用户资料
        return responseToJson(1,"查询成功",$user->original);
    }

}