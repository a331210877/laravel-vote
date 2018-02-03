<?php

return [
    /*
     * 账号基本信息，请从微信公众平台/开放平台获取
     */
    'wb_akey'  => env('WB_AKEY', ''),         // AppID
    'wb_skey'  => env('WB_SKEY', ''),     // AppSecret
    'wb_callback_url'  => env('WB_CALLBACK_URL', ''),     // callback
];
