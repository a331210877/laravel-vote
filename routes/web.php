<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
require 'admin.php';
require 'home.php';

// Route::get('/', function () {
//     return view('index');
// });
Route::get('/', function () {
    return view('login');
});

Route::get('/login', function () {
    return view('login');
});

Route::group(['middleware' => 'login.check'],function (){
    Route::get('/', function () {
        return view('index');
    });
});


Route::post('/file/upload','FileController@upload');
Route::get('/file/upload','FileController@upload');
Route::post('/check','Auth\LoginController@check');
Route::get('/captcha/get','Auth\LoginController@get_captcha');
Route::post('/logout','Auth\LoginController@logout');
Route::any('/wechat','WechatController@serve');