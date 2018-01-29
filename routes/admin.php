<?php

    Route::get('/admin/wblogin','Admin\LoginController@login'); //獲取accessToken

    Route::any('/wblogin/callback','Admin\LoginController@callback');   //回調路由

    Route::group(['middleware'=>'login.check'],function(){
        //video
        Route::post('/admin/index/addPlayer','Admin\VideoController@addPlayer');
    
        Route::post('/admin/disableVideo','Admin\VideoController@disableVideo');
    
        Route::post('/admin/getVideo','Admin\VideoController@getVideo');
    
        Route::post('/admin/enableVideo','Admin\VideoController@enableVideo');
    
    
        //user
        Route::post('/admin/getUser','Admin\UserController@getUser');
        
        Route::post('/admin/disableUser','Admin\UserController@disableUser');
        
        Route::post('/admin/enableUser','Admin\UserController@enableUser');
        
    });

