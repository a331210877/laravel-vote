<?php
namespace App\Models\Home;

use Illuminate\Database\Eloquent\Model;
use DB;

class Player extends Model
{
    public static function getPlayer()
    {
        $result= DB::table('player')->where('status',0)->get()->toarray();
        foreach($result as $k => $v) {
        	$v->image="/storage/app/uploads/images/".$v->image;
        	$v->videoImg="/storage/app/uploads/videoImg/".$v->videoImg;
        	$v->video="/storage/app/uploads/video/".$v->video;
        	$v->isLoading=false;
        	$v->disabled=true;
        }
        if($result){
            return responseToJson(1,"查询成功",$result);
        }else{
            return responseToJson(0,"查询失败",null);
        }
    }
}