<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use Session;
use App\Models\Home\User;

class IndexController extends Controller
{
    // dump(session('wechat.oauth_user'));
    public function getCarousel(){
        $select_row=DB::table('carousel')->where('status',0)->orderBy('top','desc')->get();
        return responseToJson(1,"查询成功",$select_row);
    }

    public function getPage(Request $request){
        $search=$request->input('search');
        $index=$request->index;
        $select_row=DB::table('page')
        ->join('user','page.open_id','=','user.open_id')
        ->where('page.status',0)
        ->where('title','like','%'.$search.'%')
        ->skip($index)
        ->take(2)
        ->select('page.*','user.nick_name')
        ->orderBy('start_time','desc')
        ->get();
        return responseToJson(1,"查询成功",$select_row);
    }

    public function getUserInfo(){
        $user = session('wechat.oauth_user'); // 拿到授权用户资料
        return responseToJson(1,"查询成功",$user);
    }

    public function addUser(){
        $user = session('wechat.oauth_user'); // 拿到授权用户资料
        $data["open_id"]=$user['default']['id'];
        $data["city"]=$user['default']['original']['city'];
        $data["country"]=$user['default']['original']['country'];
        $data["nick_name"]=$user['default']['nickname'];
        $data["province"]=$user['default']['original']['province'];
        $data["headimgurl"]=$user['default']['avatar'];
        $data["status"]=0;
        if(!User::getUser($user['default']['id'])){
            $addRes=User::addUser($data);
            return redirect()->to('/home#/asdasda');
        }
        return redirect()->to('/home#/index'); //這時候已經拿到用戶資料了，跳轉到想要的路由                        
    }
}