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
        $player['user_id']= 1;
        $player['page_id']= 1;
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
}