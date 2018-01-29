<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Gregwar\Captcha\CaptchaBuilder;
use Illuminate\Http\Request;
use App\Models\Auth\Login;
use Session;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * 登录验证
     */
    public function check(Request $request)
    {
        $user = $request->user;
        $captcha = $request->captcha;
        if($request->isMethod('post')){
            if (session('captcha') == $captcha) {
                //用户输入验证码正确
                $password = md5($request->password);
                $result = Login::check_login($user);
                if($result){
                    if($password == $result->password){
                        session(['admin' => $result]);
                        return responseToJson(0,'success','登录成功');
                    }else{
                        return responseToJson(1,'error','密码错误');
                    }
                }else{
                    return responseToJson(2,'error','该用户不存在');
                }
            } else {
                //用户输入验证码错误
                return responseToJson(3, $captcha, session('captcha'));
            }
        }
    }

    /**
     * 获取验证码
     */
    public function get_captcha()
    {
        $builder=new CaptchaBuilder();
        $builder ->build(100,40);
        $phrase = $builder->getPhrase();  // 获取验证码内容
        Session::flash('captcha', $phrase);
        return response($builder->output())->header('Content-type','image/jpeg');
    }

    /**
     * 注销
     */
    public function logout(Request $request)
    {
        $result = $request->session("admin")->flush();
        return responseToJson(0,'success','退出成功');
    }
}
