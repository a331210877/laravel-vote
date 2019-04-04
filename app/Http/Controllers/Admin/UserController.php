<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use Excel;
class UserController extends Controller
{
    //获取所有用户信息
    public function getUser()
    {
        $result= DB::table('user')->get()->toArray();
        $count= DB::table('user')->count();
        if($result){
            $res=[
                'result'=>$result,
                'count'=>$count
            ];
            return responseToJson(1,"查询成功",$res);
        }
        return responseToJson(0,"查询失败,请重试");
    }

    //封号
    public function disableUser(Request $request)
    {
        $id=$request->input('id');

        $result= DB::table('user')->where('id',$id)->update(['status'=>1]);
        
        if($result){
            $res['msg']="禁用成功";
            $res['code']= 1;
            $res['res']=$result;
        }else{
            $res['msg']="禁用失败,请重试";
            $res['code']= 0;
        }
        return response()->json($res);
    }

    //解封
    public function enableUser(Request $request){
        $id=$request->input('id');
        $result= DB::table('user')->where('id',$id)->update(['status'=>0]);
        if($result){
            $res['msg']="启用成功";
            $res['code']= 1;
            $res['res']=$result;
        }else{
            $res['msg']="启用失败,请重试";
            $res['code']= 0;
        }
        return response()->json($res);
    }

    //搜索用户
    public function searchUser(Request $request){
        $search=$request->input('search');
        $select_row=DB::table('user')->where('nick_name','like','%'.$search.'%')->get()->toArray();
        $count=DB::table('user')->where('nick_name','like','%'.$search.'%')->get()->count();
        $result=[
            'count'=> $count,
            'res'=> $select_row
        ];
        return responseToJson(1,"查询成功",$result);
    }

    //导出用户
    public function exportUser(Request $request){
        $select_row= DB::table('user')->get();
        $cellData=[['编号','open_id','国家','省份','城市','头像','是否删除']];
        foreach($select_row as $v){
            $data[0]=$v->id;
            $data[1]=$v->open_id;
            $data[2]=$v->country;
            $data[3]=$v->province;
            $data[4]=$v->city;
            $data[5]=$v->headimgurl;
            $data[6]=$v->status;
            $cellData[]=$data;
        }
        $fw='A1:G'.count($cellData);
        Excel::create('用户信息',function($excel) use ($cellData,$fw){
            $f=$fw;
            $excel->sheet('用户信息', function($sheet) use ($cellData,$f){
                $sheet->rows($cellData);
                $sheet->cells($f,function($cells) {
                    $cells->setAlignment('left');
                });
            });
        })->export('xlsx');
    }
}