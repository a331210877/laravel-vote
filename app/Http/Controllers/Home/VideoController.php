<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use App\Models\Home\Player;

class VideoController extends Controller
{
    public function addPlayer(Request $request){
        $player=$request->input('player');
        $userId=Player::getUserId(session('wechat.oauth_user.default.id'));
        $player['user_id']= $userId->id;
        $player['page_id']= 0;
        $player['create_time']=time();
        unset($player['id']);
        $result= DB::table('player')->insertGetId($player);
        if($result){
            $res['msg']="添加成功";
            $res['code']= 1;
            $res['id']=$result;
        }else{
            $res['msg']="添加失败,请重试";
            $res['code']= 0;
        }
        return response()->json($res);
    }

    public function getPlayer(Request $request){
        $result= Player::getPlayer('player');
        return $result;
    }

    public function getMyPlayer(){
        $userId=session('wechat.oauth_user.default.id');
        return Player::getMyPlayer($userId);
    }
}