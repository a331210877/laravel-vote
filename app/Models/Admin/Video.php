<?php
namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use DB;

class Video extends Model
{
    public static function searchPlayer($search)
    {
        $select_rows = DB::table('player')
        ->join('user','user.id','=','player.user_id')
        ->where('name','like','%'.$search.'%')
        ->select('player.id','player.name','player.ticket','player.videoImg','player.video','player.image','user.nick_name as userName','player.status')
        ->get()->toArray();
        $count = DB::table('player')
        ->where('name','like','%'.$search.'%')
        ->select('player.id','player.name','player.ticket','player.videoImg','player.video','player.image','user.nick_name as userName','player.status')
        ->count();
        foreach($select_rows as $k => $v) {
            $v->image="/storage/app/uploads/images/".$v->image;
            $v->videoImg="/storage/app/uploads/videoImg/".$v->videoImg;
            $v->video="/storage/app/uploads/video/".$v->video;
            $v->isLoading=false;
            $v->disabled=true;
        }
        $result=[
            'result'=>$select_rows,
            'count'=>$count
        ];
        return $result;
    }
}