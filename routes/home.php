<?php

Route::group(['middleware' => ['web', 'wechat.oauth']],function(){

    // Route::post('/home/vote','Home\IndexController@vote');

    // Route::post('/home/index','Home\IndexController@index');

    // Route::any('/home/index','Home\IndexController@index');

    Route::any('/home/index', function(){
        return view('home');
    });
});
