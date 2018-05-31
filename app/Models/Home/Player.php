<?php
namespace App\Models\Home;

use Illuminate\Database\Eloquent\Model;
use DB;

class Player extends Model
{
    public static function getPlayer()
    {
        $result= DB::table('player')->where('status',0)->orderBy('create_time','desc')->get()->toarray();
        foreach($result as $k => $v) {
        	$v->image="/storage/uploads/images/".$v->image;
        	$v->videoImg="/storage/uploads/videoImg/".$v->videoImg;
        	$v->video="/storage/uploads/video/".$v->video;
        	$v->isLoading=false;
        	$v->disabled=true;
        }
        if($result){
            return responseToJson(1,"查询成功",$result);
        }else{
            return responseToJson(0,"查询失败",null);
        }
    }

    public static function getMyPlayer($userId){
        $result=DB::table('player')->join('user','user.id','=','player.user_id')->where('player.status',0)->where('user.open_id',$userId)->where('player.page_id',0)->select('player.*')->get();
        return $result;
    }
}