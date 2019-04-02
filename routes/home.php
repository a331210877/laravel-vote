<?php
Route::group(['middleware' => ['web', 'wechat.oauth']],function(){

    // Route::post('/home/index','Home\IndexController@index');
    Route::get('/user', 'Home\IndexController@addUser');
    
    Route::post('/home/getCarousel','Home\IndexController@getCarousel');

    Route::post('/home/getPage','Home\IndexController@getPage');

    Route::post('/home/vote','Home\PageController@vote');
    
    Route::post('/home/addPage','Home\PageController@addPage');
    
    Route::post('/home/getUserInfo','Home\IndexController@getUserInfo');

    Route::post('/home/getPlayer','Home\VideoController@getPlayer');
   
    Route::post('/home/getMyPlayer','Home\VideoController@getMyPlayer');
});
Route::post('/home/addPlayer','Home\VideoController@addPlayer');

Route::post('/home/page','Home\PageController@page');