<?php

namespace App\Http\Controllers;

use Log;

class WechatController extends Controller
{
    /**
     * 处理微信的请求消息
     *
     * @return string
     */
    public function serve()
    {  
        Log::info('request arrived.');
        $app = app('wechat');
        $app->server->setMessageHandler(function($message) use ($app){
            if ($message->MsgType=='event') { 
                 $user_openid = $message->FromUserName;
                if ($message->Event=='subscribe') {
                    $user_info['unionid'] = $message->ToUserName;
                    $user_info['openid'] = $user_openid;
                    $userService = $app->user;
                    $user = $userService->get($user_info['openid']);
                    $user_info['subscribe_time'] = $user['subscribe_time'];
                    $user_info['nickname'] = $user['nickname'];
                    $user_info['avatar'] = $user['headimgurl'];
                    $user_info['sex'] = $user['sex'];
                    $user_info['province'] = $user['province'];
                    $user_info['city'] = $user['city'];
                    $user_info['country'] = $user['country'];
                    $user_info['is_subscribe'] = 1;
                    if (WxStudent::weixin_attention($user_info)) {
                        return '欢迎关注';
                    }else{
                        return '您的信息由于某种原因没有保存，请重新关注';
                    }
                }else if ($message->Event=='unsubscribe') {
                    if (WxStudent::weixin_cancel_attention($user_openid)) {
                        return '已取消关注';
                    }
                }
            }
        });
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // https请求 不验证证书和hosts  
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);  
        $this->add_menu();
        Log::info('return response.');
        return $app->server->serve();
    }

    public function add_menu(){
       $app = app('wechat');
       $menu = $app->menu;
       $buttons = [
           [
               "type"=>"view",
               "name"=>"进入课堂",
               "url"=>"http://vote.mrwangqi.com",
           ],
       ];
       $menu->add($buttons);
    }

    public function phpinfo(){
        phpinfo();
    }
}
