<?php

//控制器统计返回数据格式
function responseToJson($code = 0 ,$msg = '', $result = null)
{
    $res['code'] = $code;
    $res['msg'] = $msg;
    $res['result'] = $result;
    return response()->json($res);
}

//返回session_id
function get_session_user_id()
{
    $user = session('user');
    return $user ? $user->id : 0;
}

function get_session_user()
{
    $user = session('user');
    return $user ? $user : 0;
}