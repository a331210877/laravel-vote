<?php
namespace App\Models\Home;

use Illuminate\Database\Eloquent\Model;
use DB;

class User extends Model
{
    public static function addUser($data)
    {
       $addRes=DB::table('user')->insert($data);
       return $addRes;
    }

    public static function getUser($id){
        $user=DB::table('user')->where('open_id',$id)->count();
        if($user){
            return 'false';
        }
        return 'true';
    }
}