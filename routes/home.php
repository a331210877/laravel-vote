<?php

// Route::group(['middleware' => ['web', 'wechat.oauth']],function(){

    // Route::post('/home/index','Home\IndexController@index');

    Route::post('/home/getCarousel','Home\IndexController@getCarousel');

    Route::post('/home/getPage','Home\IndexController@getPage');

    Route::post('/home/vote','Home\PageController@vote');
    
    Route::post('/home/page','Home\PageController@page');
    
    Route::post('/home/getUserInfo','Home\IndexController@getUserInfo');

    Route::post('/home/addPlayer','Home\VideoController@addPlayer');

    // Route::any('/home/index', function(){
    //     return view('home');
    // });
    
// });
