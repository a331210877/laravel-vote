<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use App\Models\Admin\Video;
use Excel;
class VideoController extends Controller
{
    //获取所有选手信息
    public function getVideo()
    {
        $select_rows = DB::table('player')
        ->join('user','user.id','=','player.user_id')
        ->select('player.id','player.name','player.ticket','player.videoImg','player.video','player.image','user.nick_name as userName','player.status')
        ->get()->toArray();
        foreach($select_rows as $k => $v) {
        	$v->image="/storage/app/uploads/images/".$v->image;
        	$v->videoImg="/storage/app/uploads/videoImg/".$v->videoImg;
        	$v->video="/storage/app/uploads/video/".$v->video;
        	$v->isLoading=false;
        	$v->disabled=true;
        }
        $count=DB::table('player')
        ->join('user','user.id','=','player.user_id')
        ->select('player.id','player.name','player.ticket','player.videoImg','player.video','player.image','user.nick_name as userName','player.status')
        ->count();
        $result=[
            'select_rows'=>$select_rows,
            'count'=>$count
        ];
        return responseToJson(1,"查询成功",$result);
    }

    //禁用选手
    public function disableVideo(Request $request)
    {
        $id=$request->input('id');
        $result= DB::table('player')->where('id',$id)->increment('status');
        if($result){
        	$res['msg']="禁用成功";
        	$res['code']= 1;
        }else{
			$res['msg']="禁用失败,请重试";
        	$res['code']= 0;
        }
        return response()->json($res);
    }

    //启用选手
    public function enableVideo(Request $request)
    {
        $id=$request->input('id');
        $result= DB::table('player')->where('id',$id)->decrement('status');
        if($result){
        	$res['msg']="启用成功";
        	$res['code']= 1;
        }else{
			$res['msg']="启用失败,请重试";
        	$res['code']= 0;
        }
        return response()->json($res);
    }

    //删除多个选手
    public function deleteSome(Request $request)
    {
        $id=$request->input('id');
        $result= DB::table('player')->where('id',$id)->increment('status');
        if($result){
            $res['msg']="删除成功";
            $res['code']= 1;
        }else{
            $res['msg']="删除失败,请重试";
            $res['code']= 0;
        }
        return response()->json($res);
    }

    //添加一个选手
    public function addPlayer(Request $request)
    {
        $player=$request->input('player');
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

    public function searchPlayer(Request $request){
        $search=$request->search;
        $result=Video::searchPlayer($search);
        if($result){
            return responseToJson(1,'查询成功',$result);
        }
        return responseToJson(1,'查询失败，请重试',$result);
    }

    public function exportPlayer(){
        $select_row= DB::table('player')->get();
        $cellData=[['编号','姓名','头像','票数','视频封面','视频文件名','所属页面','上传用户','是否删除']];
        foreach($select_row as $v){
            $data[0]=$v->id;
            $data[1]=$v->name;
            $data[2]=$v->image;
            $data[3]=$v->ticket;
            $data[4]=$v->videoImg;
            $data[5]=$v->video;
            $data[6]=$v->page_id;
            $data[7]=$v->user_id;
            $data[8]=$v->status;
            $cellData[]=$data;
        }
        $fw='A1:G'.count($cellData);
        Excel::create('选手信息',function($excel) use ($cellData,$fw){
            $f=$fw;
            $excel->sheet('选手信息', function($sheet) use ($cellData,$f){
                $sheet->rows($cellData);
                $sheet->cells($f,function($cells) {
                    $cells->setAlignment('left');
                });
            });
        })->export('xlsx');
    }
}