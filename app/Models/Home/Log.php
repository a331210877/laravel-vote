<?php
namespace App\Models\Home;

use Illuminate\Database\Eloquent\Model;
use DB;

class Log extends Model
{
    public static function addVoteLog($data)
    {
        $result = DB::table('vote_log')->insertGetId($data);
        return $result;
    }

    public static function getVoteLog($playerId){
        $result = DB::table('vote_log')
        ->join('user','user.open_id', '=', 'vote_log.open_id')
        ->join('player','player.id', '=', 'vote_log.player_id')
        ->whereIn('vote_log.player_id', $playerId)
        ->select('user.nick_name', 'vote_log.create_time', 'player.name')
        ->orderBy('vote_log.create_time', 'desc')
        ->get()->toArray();
        return $result;
    }
}