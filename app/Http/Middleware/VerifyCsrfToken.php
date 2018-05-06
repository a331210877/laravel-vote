<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;
use Overtrue\Socialite\User as SocialiteUser;
class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
        'wechat',
    ];

    protected function tokensMatch($request)
    {
        // If request is an ajax request, then check to see if token matches token provider in
        // the header. This way, we can use CSRF protection in ajax requests also.
        $token = $request->ajax() ? $request->header('X-CSRF-TOKEN') : $request->input('_token');
        return $request->session()->token() == $token;
    }
    
    public function handle($request,\Closure $next){
        //todo:需要在添加了登录验证之后,取消
        $user=[
            'openid' => "odh7zsgI75iT8FRh0fGlSojc9PWM",
            'nickname' => 'wq',
            'headimgurl'=> 'http://img0.imgtn.bdimg.com/it/u=2459788677,704860311&fm=11&gp=0.jpg',
            'original' => [
                'country' => '中国啊',
                'province' => '河南啊',
                'city' => '郑州啊',
            ]
        ];
        
        $user = new SocialiteUser([
            'id' => array_get($user, 'openid'),
            'name' => array_get($user, 'nickname'),
            'nickname' => array_get($user, 'nickname'),
            'avatar' => array_get($user, 'headimgurl'),
            'email' => null,
            'original' => [],
            'provider' => 'WeChat',
        ]);
        session(['wechat.oauth_user.default' => $user]);

        if($request->method() == 'POST')
        {
            return $next($request);
        }
        
        return parent::handle($request,$next);
    }
}
