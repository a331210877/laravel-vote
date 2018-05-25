<?php
namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use DB;

class Page extends Model
{
    public static function getPage()
    {
        $result=DB::table('page')->join('user','page.open_id','=','user.open_id')->where('page.status',0)->get();
        $count=DB::table('page')->join('user','page.open_id','=','user.open_id')->where('page.status',0)->count();
        $res=[
            'result'=>$result,
            'count'=>$count
        ];
        if($result){
            return responseToJson(1,'查询成功',$res);
        }else{
            return responseToJson(0,'查询失败');
        }
    }

    public static function delPage($id)
    {
        $delRes=DB::table('page')->where('id',$id)->update(['status'=>1]);
        if($delRes){
            return responseToJson(1,'删除成功');
        }else{
            return responseToJson(0,'删除失败');
        }
    }

    public static function searchPage($search)
    {
        $result=DB::table('page')->join('user','page.open_id','=','user.open_id')->where('title','like','%'.$search.'%')->where('page.status',0)->get()->toArray();
        $count = DB::table('page')->where('title','like','%'.$search.'%')->count();
        $res=[
            'result'=>$result,
            'count'=>$count
        ];
        return responseToJson(1,'查询成功',$res);
    }
}