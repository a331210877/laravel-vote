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

    public static function updateCarousel($carousel,$id){
        $updateRes=DB::table('carousel')->where('id',$id)->update($carousel);
        return $updateRes;
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
        $top=DB::table('carousel')->where('id',$id)->select('top')->pluck('top');
        if($top) return $top['0'];
        return false;
    }

    public static function getOneCarousel($id){
        $carousel=DB::table('carousel')->where('id',$id)->first();
        return $carousel;
    }

    public static function addCarousel($carousel){
        $addRes=DB::table('carousel')->insertGetId($carousel);
        return $addRes;
    }

    public static function carouselCount(){
        $count=DB::table('carousel')->count();
        return $count;
    }

    public static function getId($top){
        $id=DB::table('carousel')->where('top',$top)->pluck('id');
        if($id) return $id['0'];
        return false;
    } 

    public static function getGTMin($top){
        $max=DB::table('carousel')->where('status',0)->where('top','>',$top)->min('top');
        return $max;
    }
}