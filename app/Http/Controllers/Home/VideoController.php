<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use App\Models\Home\Player;
use App\Models\Home\Log;

class VideoController extends Controller
{
    public function addPlayer(Request $request){
        $player=$request->input('player');
        $userId=Player::getUserId(session('wechat.oauth_user.default.id'));
        $player['user_id']= $userId->id;
        $player['page_id']= 0;
        $player['create_time']=time();
        unset($player['id']);
        $result= DB::table('player')->insertGetId($player);
        if($result){
            $res['msg']="添加成功";
            $res['code']= 1;
            $res['id']=$result;
        }else{
            $res['msg']="添加失败,请重试";
            $res['code']= 0;
        }
        return response()->json($res);
    }

    public function getPlayer(Request $request){
        $result= Player::getPlayer('player');
        return $result;
    }

    public function getMyPlayer(){
        $userId=session('wechat.oauth_user.default.id');
        return Player::getMyPlayer($userId);
    }

    public function vote(Request $request){
		$id=$request->input('id');
        $result=DB::table('player')->where('id',$id)->increment('ticket');
		if($result){
			$res['msg']="投票成功";
            $res['code']= 1;
            $data['open_id'] = session('wechat.oauth_user.default.id');
            $data['player_id'] = $id;
            $data['create_time'] = time();
            if ($data['open_id']) {
                $addVoteLog = Log::addVoteLog($data);
            }
		}else{
			$res['msg']="投票失败,请重试";
        	$res['code']= 0;
		}
		return response()->json($res);
    }
    
    public function getRankList(Request $request) {
        $page_id=$request->page_id;
        $rankList = Player::getRankList($page_id);
        if ($rankList) {
            foreach($rankList as $k => $v) {
                $v->image="/storage/uploads/images/".$v->image;
            }
			return responseToJson(1, "查询成功", $rankList);
		}
		return responseToJson(0, "查询失败", []);
    }
}