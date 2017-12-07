<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Storage;
use Session;

class IndexController extends Controller
{
    public function index(){
        if (isset($_GET['code'])){
            session(['open_id'=>$_GET['code']]);
        }else{
            echo "NO CODE";
        }
    }
}