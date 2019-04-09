<?php
namespace App\Models\Home;

use Illuminate\Database\Eloquent\Model;
use DB;

class Page extends Model
{
    public static function addPage($page)
    {
        $data['figure']=$page['image'];
        $data['open_id']=session('wechat.oauth_user.default.id');
        $data['start_time']=time();
        $data['end_time']=$page['endTime'];
        $data['title']=$page['title'];
        $data['main_content']="";
        $data['status']=0;
        $addRes=DB::table('page')->insertGetId($data);
        return $addRes;
    }

    public static function updatePlayerId($arr,$id){
        $result=DB::table('player')->where('status',0)->whereIn('id',$arr)->update(['page_id'=>$id]);
    }

    public static function getMyPage($open_id, $search) {
        $result = DB::table('page')->join('user','page.open_id','=','user.open_id')
        ->where('page.status', '!=', 1)
        ->where('page.open_id', $open_id)
        ->where('page.title','like','%'.$search.'%')
        ->select('page.*','user.nick_name')
        ->orderBy('start_time','desc')
        ->get()->toArray();
        return $result;
    }

    public static function endVote($page_id) {
        $result = DB::table('page')->where('id', $page_id)->update(['status' => 2]);
        return $result;
    }

    public static function delPage($page_id)
    {
        $delRes=DB::table('page')->where('id',$page_id)->update(['status'=>1]);
        return $delRes;
    }
}