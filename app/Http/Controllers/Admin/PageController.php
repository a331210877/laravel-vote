<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Page;
use DB;
use Illuminate\Http\Request;
use Storage;
use Excel;
class PageController extends Controller
{
    public function getPage(){
        $result=Page::getPage();
        return $result;
    }

    public function delPage(Request $request){
        $id=$request->input('id');
        $result=Page::delPage($id);
        return $result;
    }

    public function searchPage(Request $request){
        $search=$request->search;
        return Page::searchPage($search);
    }

    public function exportPage(){
        $select_row= DB::table('page')->get();
        $cellData=[['编号','配图','主要内容','open_id','开始时间','结束时间','是否删除']];
        foreach($select_row as $v){
            $data[0]=$v->id;
            $data[1]=$v->figure;
            $data[2]=$v->main_content;
            $data[3]=$v->open_id;
            $data[4]=$v->start_time;
            $data[5]=$v->end_time;
            $data[6]=$v->status;
            $cellData[]=$data;
        }
        $fw='A1:G'.count($cellData);
        Excel::create('活动页面信息',function($excel) use ($cellData,$fw){
            $f=$fw;
            $excel->sheet('活动页面信息', function($sheet) use ($cellData,$f){
                $sheet->rows($cellData);
                $sheet->cells($f,function($cells) {
                    $cells->setAlignment('left');
                });
            });
        })->export('xlsx');
    }
}