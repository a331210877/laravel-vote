<?php

namespace App\Http\Middleware;
use Closure;

class LoginMiddleware
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
        if(get_session_admin()){
            return $next($request);
        } else {
            return responseToJson(2,'login','未登錄');
        }
    }
}
