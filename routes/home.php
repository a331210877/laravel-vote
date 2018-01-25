<?php
Route::group(['middleware' => ['web', 'wechat.oauth']],function(){

    // Route::post('/home/index','Home\IndexController@index');
    Route::get('/user', function () {
        $user = session('wechat.oauth_user'); // 拿到授权用户资料

        dd($user);
    });
    
    Route::post('/home/getCarousel','Home\IndexController@getCarousel');

    Route::post('/home/getPage','Home\IndexController@getPage');

    Route::post('/home/vote','Home\PageController@vote');
    
    Route::post('/home/page','Home\PageController@page');
    
    Route::post('/home/getUserInfo','Home\IndexController@getUserInfo');

    Route::post('/home/addPlayer','Home\VideoController@addPlayer');

});