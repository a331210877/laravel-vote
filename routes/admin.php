<?php

    Route::get('/admin/wblogin','Admin\LoginController@login'); //獲取accessToken

    Route::any('/wblogin/callback','Admin\LoginController@callback');   //回調路由

    Route::post('/islogin','Admin\LoginController@isLogin');

    Route::group(['middleware'=>'login.check'],function(){
        //video
        Route::post('/admin/index/addPlayer','Admin\VideoController@addPlayer');
    
        Route::post('/admin/disableVideo','Admin\VideoController@disableVideo');
    
        Route::post('/admin/getVideo','Admin\VideoController@getVideo');
    
        Route::post('/admin/enableVideo','Admin\VideoController@enableVideo');

        Route::post('/admin/searchVideo','Admin\VideoController@searchPlayer');

        Route::get('/admin/exportPlayer','Admin\VideoController@exportPlayer');
        //user
        Route::post('/admin/getUser','Admin\UserController@getUser');
        
        Route::post('/admin/disableUser','Admin\UserController@disableUser');
        
        Route::post('/admin/enableUser','Admin\UserController@enableUser');
        
        Route::post('/admin/searchUser','Admin\UserController@searchUser');

        Route::get('/admin/exportUser','Admin\UserController@exportUser');
        //page
        Route::post('/admin/getPage','Admin\PageController@getPage');

        Route::post('/admin/delPage','Admin\PageController@delPage');

        Route::post('/admin/searchPage','Admin\PageController@searchPage');

        Route::get('/admin/exportPage','Admin\PageController@exportPage');
        //carousel
        Route::post('/admin/getCarousel','Admin\CarouselController@getCarousel');

        Route::post('/admin/searchCarousel','Admin\CarouselController@searchCarousel');

        Route::get('/admin/exportCarousel','Admin\CarouselController@exportCarousel');

        Route::post('/admin/delCarousel','Admin\CarouselController@delCarousel');

        Route::post('/admin/updateTop','Admin\CarouselController@updateTop');

        Route::post('/admin/addCarousel','Admin\CarouselController@addCarousel');
    });

