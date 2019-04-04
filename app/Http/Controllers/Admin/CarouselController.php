<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use App\Models\Admin\Carousel;
use Excel;
class CarouselController extends Controller
{
    public function getCarousel(){
        return Carousel::getCarousel();
    }

    public function searchCarousel(Request $request){
        $search=$request->search;
        return Carousel::searchCarousel($search);
    }

    public function delCarousel(Request $request){
        $id=$request->id;
        $delRes=Carousel::delCarousel($id);
        if($delRes){
            return responseToJson(1,'删除成功');
        }
        return responseToJson(0,'删除失败，请重试');
    }

    public function updateTop(Request $request){
        $id=$request->id;
        $index=$request->index;
        $top=Carousel::getTop($id);
        if($top){
            $top2=Carousel::getGTMin($top);
            if($top2){
                $id2=Carousel::getId($top2);
                if($id2){
                    $updateTop1=Carousel::updateTop($id,$top2);
                    $updateTop2=Carousel::updateTop($id2,$top);
                    if($updateTop1&&$updateTop2){
                        $carousel="";
                        if($index==0){
                            $carousel=Carousel::getOneCarousel($returnId);
                        }
                        return responseToJson(1,'上移成功');
                    }
                    return responseToJson(1,'上移成功');
                }
                return responseToJson(0,'上移失败');
            }
            return responseToJson(0,'上移失败');
        }
        return responseToJson(0,'上移失败');
    }

    public function updateCarousel(Request $request){
        $carousel=$request->carousel;
        $id=$carousel['id'];
        $carousel=[
            'img'=>$carousel['img'],
            'title'=>$carousel['title'],
            'url'=>$carousel['url'],
        ];
        $updateRes=Carousel::updateCarousel($carousel,$id);
        if($updateRes){
            return responseToJson(1,'修改成功',$updateRes);
        }
        return responseToJson(0,'修改失败',$updateRes);
    }

    public function addCarousel(Request $request){
        $carousel=$request->carousel;
        $count=Carousel::carouselCount();
        $count++;
        $carousel=[
            "img"=>$carousel['img'],
            "title"=>$carousel['title'],
            "url"=>$carousel['url'],
            "top"=>$count
        ];
        $addRes=Carousel::addCarousel($carousel);
        if($addRes){
            return responseToJson(1,'添加成功',$count);
        }
        return responseToJson(0,$msg.'失败，请重试',$count);
    }

    public function exportCarousel(){
        $select_row= DB::table('carousel')->get();
        $cellData=[['编号','轮播图','轮播名称','关联链接','是否删除']];
        foreach($select_row as $v){
            $data[0]=$v->id;
            $data[1]=$v->img;
            $data[2]=$v->title;
            $data[3]=$v->url;
            $data[4]=$v->status;
            $cellData[]=$data;
        }
        $fw='A1:G'.count($cellData);
        Excel::create('轮播信息',function($excel) use ($cellData,$fw){
            $f=$fw;
            $excel->sheet('轮播信息', function($sheet) use ($cellData,$f){
                $sheet->rows($cellData);
                $sheet->cells($f,function($cells) {
                    $cells->setAlignment('left');
                });
            });
        })->export('xlsx');
    }

    public function test(Request $request){
        $top=$request->top;
        return Carousel::getSecondMax($top);
    }
}