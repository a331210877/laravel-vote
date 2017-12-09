<?php

namespace App\Http\Middleware;

use Closure;

class WechatMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $app = app('wechat');//从项目实例中得到一个oauth应用实例
        $oauth = $app->oauth;//得到joomla当前用户
        if (empty(session('open_id'))) {//未登录，引导用户到微信服务器授权
            session(['open_id'=>$request->code]);
            dump($request->code);
            dump($request);
            $response = $app->oauth->scopes(['snsapi_userinfo'])->setRequest($request)->redirect();
            // dump($app);
        }else{//已登录状态，重定向到joomla首页
            return $next($request);
        }
    }
}
