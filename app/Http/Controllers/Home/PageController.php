<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use App\Models\Home\Page;
use Log;

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
		if ($page) {
			$page->figure="/storage/uploads/images/".$page->figure;
			foreach($select_rows as $k => $v) {
				$v->image="/storage/uploads/images/".$v->image;
				$v->videoImg="/storage/uploads/videoImg/".$v->videoImg;
				$v->video="/storage/uploads/video/".$v->video;
				$v->isLoading=false;
				$v->disabled=true;
			}
		}
		return  response()->json([
            'select_row' => $select_rows,
            'page' => $page
		]);
	}

	public function addPage(Request $request){
		$page=$request->page;
		$idList=$request->idList;
		$id=Page::addPage($page);
		if($id){
			$updateRes=Page::updatePlayerId($idList,$id);
			return responseToJson(1,"发起投票成功",$id);			
		}
		return responseToJson(1,"发起投票失败",$id);					
	}

	public function getMyPage(Request $request) {
		$open_id = session('wechat.oauth_user.default.id');
		$search = $request->search;
		$myPageRes =  Page::getMyPage($open_id, $search);
		if ($myPageRes) {
			$time = time();
			foreach($myPageRes as $k => $v) {
				if ($v->end_time < $time || $v->status == 2) {
					$v->statusPng = 1;
				}
			}
			return responseToJson(1, "查询成功", $myPageRes);
		}
		return responseToJson(0, "查询失败", []);
	}

	public function endVote(Request $request) {
		$pageId = $request->page_id;
		$endRes = Page::endVote($pageId);
		if ($endRes) {
			return responseToJson(1, "投票已截止", $endRes);
		}
		return responseToJson(0, "出错，请重试", []);
	}

	public function delPage(Request $request){
        $page_id=$request->input('page_id');
		$result=Page::delPage($page_id);
		if ($result) {
			return responseToJson(1, "刪除成功", $result);
		}
		return responseToJson(0, "出错，请重试", []);
    }
}