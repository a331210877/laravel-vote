<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Page;
use DB;
use Illuminate\Http\Request;
use Storage;

class PageController extends Controller
{
    public function getPage(){
        $result=Page::getPage();
        return $result;
    }

    public function delPage(Request $request){
        $id=$request->input('id');
        $result=Page::delPage($id);
        return $result;
    }
}