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
        Log::info('request arrived.'); # 注意：Log 为 Laravel 组件，所以它记的日志去 Laravel 日志看，而不是 EasyWeChat 日志

        $app = app('wechat.official_account');
        $app->server->push(function($message){
            return "欢迎关注 overtrue！";
        });
        $this->add_menu();
        return $app->server->serve();
    }

    public function add_menu(){
       $app = app('wechat');
       $menu = $app->menu;
       $buttons = [
           [
               "type"=>"view",
               "name"=>"进入课堂",
               "url"=>"http://vote.mrwangqi.com/home/index",
           ],
       ];
       $menu->add($buttons);
    }

    public function phpinfo(){
        phpinfo();
    }
}
