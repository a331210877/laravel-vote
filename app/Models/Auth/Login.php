<?php
namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Model;
use DB;

class Login extends Model
{
    public static function check_login($user)
    {
        $result = DB::table('admin')->where('username',$user)->first();
        return $result ? $result : 0;
    }
}