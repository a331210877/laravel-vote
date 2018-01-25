<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8"><meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
    <link href="//vjs.zencdn.net/5.19/video-js.min.css" rel="stylesheet">
    <link href="/images/vote.ico" rel="shortcut icon">
    <title>天降正义投票系统</title>
</head>
<body>
    <div id="app"></div>
    <script>     
        function getLocalTime(nS) {     
            return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");      
        } 
    </script>
    <!-- <script src="//vjs.zencdn.net/5.1/video.min.js"></script> -->
    <script src="{{ mix('js/home.js') }}"></script>
</body>
</html>