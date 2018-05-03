<?php
namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use DB;

class Page extends Model
{
    public static function getPage()
    {
        $result=DB::table('page')->join('user','page.open_id','=','user.open_id')->where('page.status',0)->get();
        
        if($result){
            return responseToJson(1,'查询成功',$result);
        }else{
            return responseToJson(0,'查询失败',$result);
        }
    }

    public static function delPage($id)
    {
        $delRes=DB::table('page')->where('id',$id)->update(['status'=>1]);
        if($delRes){
            $result=DB::table('page')->join('user','page.open_id','=','user.open_id')->where('page.status',0)->get();
            if($result){
                return responseToJson(1,'删除成功',$result);
            }else{
                return responseToJson(0,'删除成功',$result);
            }
        }else{
            return responseToJson(0,'删除失败',$delRes);
        }
    }
}