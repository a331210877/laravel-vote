<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use Log;
use app\Libs\wbsdk\WBSDK;

class LoginController extends Controller
{

    public function login(){

        $o=new WBSDK(config('weibo.wb_akey'),config("weibo.wb_skey"));

        $url=config("weibo.wb_callback_url");

        $oauth=$o->getAuthorizeURL($url);

        return redirect()->to($oauth);

    }

    public function callback(){

        $o = new WBSDK(config('weibo.wb_akey'),config("weibo.wb_skey"));
        
        if (isset($_REQUEST['code'])) {
            $keys = array();
            $keys['code'] = $_REQUEST['code'];
            $keys['redirect_uri'] = config("weibo.wb_callback_url");
            try {
                $token = $o->getAccessToken( 'code', $keys ) ;
            } catch (OAuthException $e) {
                Log::info($e);
            }
        }
        
        if ($token) {
            session(['admin' => $token]);
            return redirect()->to("/admin#/user");
        } else {
            return "授权失败。";
        }
    }

    public function isLogin(){
        
        $o=new WBSDK(config('weibo.wb_akey'),config("weibo.wb_skey"));

        $url=config("weibo.wb_callback_url");

        $oauth=$o->getAuthorizeURL($url);

        return redirect()->to($oauth);

    }
}