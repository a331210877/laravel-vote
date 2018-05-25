<?php
namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use DB;

class Carousel extends Model
{
    public static function getCarousel()
    {
      $select_row=DB::table('carousel')->where('status',0)->orderBy('top','desc')->get()->toArray();
      $count=DB::table('carousel')->where('status',0)->count();
      if($select_row&&$count){
          $result=[
              'result'=>$select_row,
              'count'=>$count
          ];
          return responseToJson(1,"查询成功",$result);
      }
      return responseToJson(0,"查询失败请重试");
    }

    public static function searchCarousel($search){
        $select_row=DB::table('carousel')->where('title','like','%'.$search.'%')->get()->toArray();
        $count=DB::table('carousel')->where('title','like','%'.$search.'%')->count();
        if($select_row&&$count){
            $result=[
                'result'=>$select_row,
                'count'=>$count
            ];
            return responseToJson(1,"查询成功",$result);
        }
        return responseToJson(0,"查询失败请重试");
    }

    public static function delCarousel($id){
        $delRes=DB::table('carousel')->where('id',$id)->update(['status'=>1]);
        return $delRes;
    }

    public static function updateTop($id,$top){
        $udpateRes=DB::table('carousel')->where('id',$id)->update(['top'=>$top]);
        return $udpateRes;
    }

    public static function getTop($id){
        $top=DB::table('carousel')->where('id',$id)->select('top')->first();
        return $top;
    }

    public static function getOneCarousel($id){
        $carousel=DB::table('carousel')->where('id',$id)->first();
        return $carousel;
    }

    public static function incTop($id){
        $res=DB::table('carousel')->where('id',$id)->increment('top');
        return $res;
    }

    public static function decTop($top){
        $res=DB::table('carousel')->where('top',$top)->decrement('top');
        return $res;
    }

    public static function addCarousel($carousel){
        $addRes=DB::table('carousel')->insertGetId($carousel);
        return $addRes;
    }
}