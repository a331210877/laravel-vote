<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use App\Models\Home\Log;
use App\Models\Home\Player;

class LogController extends Controller
{
    public function getVoteLog(Request $request){
        $page_id = $request->page_id;
        $playerId = Player::getPlayerId($page_id);
        $playerIds = [];
        foreach ($playerId as $k=>$v) {
            array_push($playerIds, $v->id);
        }
        if ($playerId) {
            $result = Log::getVoteLog($playerIds);
            if ($result) {
                return responseToJson(1, "查询成功", $result);
            }
            return responseToJson(0, "查询投票记录出错", []);
        } else {
            return responseToJson(0, "获取本投票页面选手列表出错", []);
        }
    }
}