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

    public static function getUserId($openId){
        $result=DB::table('user')->where('open_id',$openId)->select('id')->first();
        return $result;
    }

    public static function getPageId($playerId) {
        $page_id = DB::table('player')->where('id', $playerId)->select('page_id')->first();
        return $page_id;
    }

    public static function getRankList($pageId) {
        $result = DB::table('player')->where('status', 0)->where('page_id', $pageId)->orderBy('ticket','desc')->get()->toArray();
        return $result;
    }

    public static function getPlayerId($pageId) {
        $result = DB::table('player')->where('page_id', $pageId)->select('id')->get()->toArray();
        return $result;
    }
}