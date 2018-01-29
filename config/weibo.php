<?php

return [
    /*
     * 账号基本信息，请从微信公众平台/开放平台获取
     */
    'wb_akey'  => env('WB_AKEY', '237166009'),         // AppID
    'wb_skey'  => env('WB_SKEY', 'bdd0a7b3b9161237ad332ef2ac9bbc78'),     // AppSecret
    'wb_callback_url'  => env('WB_CALLBACK_URL', 'http://vote.mrwangqi.com/wblogin/callback'),     // callback
];
