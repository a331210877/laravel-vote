<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;

class PageController extends Controller
{
	public function page(){
        $select_rows = DB::table('player')->where('status',0)->get()->toarray();
        foreach($select_rows as $k => $v) {
        	$v->image=storage_path()."/app/uploads/images/".$v->image;
        	$v->videoImg=storage_path()."/app/uploads/videoImg/".$v->videoImg;
        	$v->video=storage_path()."/app/uploads/video/".$v->video;
        	$v->isLoading=false;
        	$v->disabled=true;
        }
        return response()->json($select_rows);
	}
	public function vote(Request $request){
		$id=$request->input('id');
		$result=DB::table('player')->where('id',$id)->increment('ticket');
		if($result){
			$res['msg']="投票成功";
        	$res['code']= 1;
		}else{
			$res['msg']="投票失败,请重试";
        	$res['code']= 0;
		}
		return response()->json($res);
	}
}