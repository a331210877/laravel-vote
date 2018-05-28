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

Route::get('/login', function () {
    return view('login');
});

Route::post('/file/upload','FileController@upload');
Route::get('/file/upload','FileController@upload');
Route::any('/file/uploadVux','FileController@uploadVux');
Route::post('/check','Auth\LoginController@check');
Route::get('/captcha/get','Auth\LoginController@get_captcha');
Route::post('/logout','Auth\LoginController@logout');
Route::any('/wechat','WechatController@serve');
Route::any('/addMenu','WechatController@add_menu');
Route::get('/phpinfo','WechatController@phpinfo');

Route::get('/home',function(){
    return view('home');
});
Route::get('/admin',function(){
    return view('admin');
});
Route::get('/test','TestController@index');