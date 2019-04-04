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
        if($request->method() == 'POST')
        {
            return $next($request);
        }
        
        return parent::handle($request,$next);
    }
}
