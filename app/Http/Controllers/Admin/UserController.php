<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;

class UserController extends Controller
{
    //获取所有用户信息
    public function getUser()
    {
        $result= DB::table('user')->get();
        if($result){
            $res['msg']="查询成功";
            $res['code']= 0;
            $res['res']=$result;
        }else{
            $res['msg']="查询失败,请重试";
            $res['code']= 1;
        }
        return response()->json($res);
    }

    //封号
    public function disableUser(Request $request)
    {
        $id=$request->input('id');
        $result= DB::table('user')->where('id',$id)->increment('status');
        if($result){
            $res['msg']="禁用成功";
            $res['code']= 1;
            $res['res']=$result;
            // return responseToJson(1,'删除成功',$result);
        }else{
            $res['msg']="禁用失败,请重试";
            $res['code']= 0;
            // return responseToJson(0,'删除失败',$result);
        }
        return response()->json($res);
    }

    //解封
    public function enableUser(Request $request){
        $id=$request->input('id');
        $result= DB::table('user')->where('id',$id)->decrement('status');
        if($result){
            $res['msg']="启用成功";
            $res['code']= 1;
            $res['res']=$result;
            // return responseToJson(1,'删除成功',$result);
        }else{
            $res['msg']="启用失败,请重试";
            $res['code']= 0;
            // return responseToJson(0,'删除失败',$result);
        }
        return response()->json($res);
    }
}