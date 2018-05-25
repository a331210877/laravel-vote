<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;

class PageController extends Controller
{
	public function page(Request $request){
		$id=$request->input('id');
		$select_rows = DB::table('player')
		->where([
			'status' => 0,
			'page_id' => $id
		])
		->get()
		->toarray();

		$page=DB::table('page')->where([
			'status' => 0,
			'id' => $id
		])->first();
		$page->figure="/storage/app/uploads/images/".$page->figure;
        foreach($select_rows as $k => $v) {
        	$v->image="/storage/app/uploads/images/".$v->image;
        	$v->videoImg="/storage/app/uploads/videoImg/".$v->videoImg;
        	$v->video="/storage/app/uploads/video/".$v->video;
        	$v->isLoading=false;
        	$v->disabled=true;
		}

		return  response()->json([
            'select_row' => $select_rows,
            'page' => $page
		]);
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