<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;

class VideoController extends Controller
{
    //获取所有选手信息
    public function getVideo()
    {
        $select_rows = DB::table('player')
        ->join('user','user.id','=','player.user_id')
        ->select('player.id','player.name','player.ticket','player.videoImg','player.video','user.name as userName','player.status')
        ->get();

        return response()->json($select_rows);
    }

    //禁用选手
    public function disableVideo(Request $request)
    {
        $id=$request->input('id');
        $result= DB::table('player')->where('id',$id)->increment('status');
        if($result){
        	$res['msg']="禁用成功";
        	$res['code']= 1;
        }else{
			$res['msg']="禁用失败,请重试";
        	$res['code']= 0;
        }
        return response()->json($res);
    }

    //启用选手
    public function enableVideo(Request $request)
    {
        $id=$request->input('id');
        $result= DB::table('player')->where('id',$id)->decrement('status');
        if($result){
        	$res['msg']="启用成功";
        	$res['code']= 1;
        }else{
			$res['msg']="启用失败,请重试";
        	$res['code']= 0;
        }
        return response()->json($res);
    }

    //删除多个选手
    public function deleteSome(Request $request)
    {
        $id=$request->input('id');
        $result= DB::table('player')->where('id',$id)->increment('status');
        if($result){
            $res['msg']="删除成功";
            $res['code']= 1;
        }else{
            $res['msg']="删除失败,请重试";
            $res['code']= 0;
        }
        return response()->json($res);
    }

    //添加一个选手
    public function addPlayer(Request $request)
    {
        $player=$request->input('player');
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

}