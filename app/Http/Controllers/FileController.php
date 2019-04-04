<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;
use Storage;


class FileController extends Controller
{
    public function uploadVux(Request $request)
    {
        if ($request->isMethod('post')) {

            $fileType = $request->input('type');
            $file = $request->file('file');
            $savePath="uploads/".$fileType;
            //文件是否上传成功
            if($file->isValid()){

                // 获取文件相关信息
                $originalName = $file->getClientOriginalName(); // 文件原名
                $ext = $file->getClientOriginalExtension();     // 扩展名
                $realPath = $file->getRealPath();   //临时文件的绝对路径
                $type = $file->getClientMimeType();     // image/jpeg

                $type = explode(',',$type); 
        
                 // 上传文件
                $filename = date('Y-m-d-H-i-s') . '-' . uniqid() . '.' . $ext;
                // 使用我们新建的uploads本地存储空间（目录）
                $bool = Storage::disk($savePath)->put($filename, file_get_contents($realPath));

                $full_path='storage/'.$savePath.'/'.$filename;
                
                $res=[
                    'result' => 0,
                    'message' => '上传成功',
                    'data'=>(object)[
                        'url'=>$full_path
                    ]
                ];
                return response()->json($res);
            }
        }
    }

    public function upload(Request $request)
    {
        if ($request->isMethod('post')) {

            $fileType = $request->input('type');
            $file = $request->file('file');
            $savePath="uploads/".$fileType;
            //文件是否上传成功
            if($file->isValid()){

                // 获取文件相关信息
                $originalName = $file->getClientOriginalName(); // 文件原名
                $ext = $file->getClientOriginalExtension();     // 扩展名
                $realPath = $file->getRealPath();   //临时文件的绝对路径
                $type = $file->getClientMimeType();     // image/jpeg

                $type = explode(',',$type); 
        
                 // 上传文件
                $filename = date('Y-m-d-H-i-s') . '-' . uniqid() . '.' . $ext;
                // 使用我们新建的uploads本地存储空间（目录）
                $bool = Storage::disk($savePath)->put($filename, file_get_contents($realPath));
                return $filename;
            }
        }
    }
}