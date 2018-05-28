<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
    <meta name="description" content="ffffddd">
    <title>王琦投票系统</title>
</head>
<body>
    <div id="app"></div>
    <script>     
        function getLocalTime(nS) {     
            return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");      
        } 
    </script>
    <script src="{{ mix('js/admin.js') }}"></script>
    <script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1" charset="utf-8"></script>
    <script src="http://connect.qq.com/widget/loader/loader.js" widget="shareqq" charset="utf-8"></script>
</body>
</html>