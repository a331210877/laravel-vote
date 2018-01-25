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
        $wechat = app('wechat');
        $wechat->server->setMessageHandler(function($message){
            return "欢迎关注 overtrue！";
        });

        $this->add_menu();
        return $wechat->server->serve();
    }

    public function add_menu(){
       $app = app('wechat');
       $menu = $app->menu;
       $buttons = [
           [
               "type"=>"view",
               "name"=>"进入课堂",
               "url"=>"http://vote.mrwangqi.com/user",
           ],
       ];
       $menu->add($buttons);
    }

    public function phpinfo(){
        phpinfo();
    }
}
