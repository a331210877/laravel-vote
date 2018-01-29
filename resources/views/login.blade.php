<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js"></script>

    <title>天降正义投票系统</title>
    <style>
        .login_div{
            width: 440px;
            height: 380px;
            border-radius: 5px;
            border: 1px solid #eaeaea;
            box-shadow: 0 2px 2px 0 #cac6c6;
            opacity: .9;
            background-color: white;
        }
        .in{
            height: 35px;
            margin: 7px;
            width: 100%;
            padding-left: 5px;
            border-radius: 5px;
            border: 1px solid #cccccc;
        }
        .formdiv{
            width: 323px;
            text-align: center;
            padding: 20px 0;
        }
        #submit{
            background:#000;
            height: 40px;
            font-size: 17px;
            /*color: white;*/
            background-color:#448ac7;
        }
        .captcha{
            float: left;
            height: 34px;
            margin: 5px 0;
            padding-left: 5px;
            width: 61%;
            border-radius: 5px;
            border: 1px solid #cccccc;
            margin: 7px;
        }
        #Captcha_img{
            margin-top: 8px;
            border-radius: 4px
        }
        *{
            margin: 0 auto;
        }
        .remind{
            height: 21px;
            float: left;
            margin-left: 10px;
            color: red;
        }
        body{
            background-color: #000000;
            margin: 0px;
            overflow: hidden;
            text-align: center;
        }
        /*a{color:#0078ff;}*/
        .centerdiv{
            margin: 0 auto;
            width: 100%;
            position: absolute;
            top: 17%;
        }
    </style>
</head>
<body>
<div class="centerdiv">
   <div class="login_div">
        <form class="formdiv">
            <h1 class="Title">系统登录</h1><br>
            <div>
                <input type="text" name="user" id="name"  placeholder="请输入用户名" class="in" required/>
            </div>
            <p class="remind remind-user"></p>
            <p>
                <input type="password" name="password" id="password"  placeholder="请输入密码" class="in" pattern=".{6,10}"
                       pm="密码要在6到10位之间" required>
            </p>
           <p class="remind remind-pwd"></p>
            <div style="clear: both"></div>
            <div style="width: 100%;height: 40px;">
                <input style="width: 125px;" type="text" name="captcha" class="captcha" placeholder="请输入验证码"id="captcha" required>
                <a id="code_A"><img src="{{url('captcha/get')}}" onclick="this.src='{{url('captcha/get')}}?'+Math.random();" id="Captcha_img"></a>
            </div>
            <div style="clear: both"></div>
            <p class="remind remind-captcha"></p>
            <p>
                <input type="button" name="submit" value="登录" class="in" id="submit" onclick="submitForm()">
            </p>
            <p>{{csrf_field()}}</p>
        </form>
   </div>
</div>
   <script type="text/javascript" src=" /chart/background_pic.min.js "></script>
   <script type="text/javascript">
       var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

       var container;
       var camera, scene, renderer;

       var particles, particle, count = 0;

       var mouseX = 0, mouseY = 0;

       var windowHalfX = window.innerWidth / 2;
       var windowHalfY = window.innerHeight /1.5;

       init();
       animate();

       function init() {

           container = document.createElement( 'div' );
           document.body.appendChild(container);

           camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
           camera.position.z = 1000;

           scene = new THREE.Scene();

           particles = new Array();

           var PI2 = Math.PI * 2;
           var material = new THREE.ParticleCanvasMaterial( {

               color: 0xffffff,
               program: function ( context ) {

                   context.beginPath();
                   context.arc( 0, 0, 1, 0, PI2, true );
                   context.fill();
               }
           } );

           var i = 0;

           for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

               for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                   particle = particles[ i ++ ] = new THREE.Particle( material );
                   particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                   particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                   scene.add( particle );
               }
           }

           renderer = new THREE.CanvasRenderer();
           renderer.setSize( window.innerWidth, window.innerHeight );
           container.appendChild( renderer.domElement );

           document.addEventListener( 'mousemove', onDocumentMouseMove, false );
           document.addEventListener( 'touchstart', onDocumentTouchStart, false );
           document.addEventListener( 'touchmove', onDocumentTouchMove, false );

           window.addEventListener( 'resize', onWindowResize, false );
       }

       function onWindowResize() {

           windowHalfX = window.innerWidth / 2;
           windowHalfY = window.innerHeight / 2;

           camera.aspect = window.innerWidth / window.innerHeight;
           camera.updateProjectionMatrix();

           renderer.setSize( window.innerWidth, window.innerHeight );

       }

       function onDocumentMouseMove( event ) {

           mouseX = event.clientX - windowHalfX;
           mouseY = event.clientY - windowHalfY;

       }
       function onDocumentTouchStart( event ) {

           if ( event.touches.length === 1 ) {

               event.preventDefault();

               mouseX = event.touches[ 0 ].pageX - windowHalfX;
               mouseY = event.touches[ 0 ].pageY - windowHalfY;

           }
       }

       function onDocumentTouchMove( event ) {

           if ( event.touches.length === 1 ) {

               event.preventDefault();

               mouseX = event.touches[ 0 ].pageX - windowHalfX;
               mouseY = event.touches[ 0 ].pageY - windowHalfY;
           }
       }
       function animate() {

           requestAnimationFrame( animate );

           render();
       }

       function render() {

           camera.position.x += ( mouseX - camera.position.x ) * .05;
           camera.position.y += ( - mouseY - camera.position.y ) * .05;
           camera.lookAt( scene.position );

           var i = 0;

           for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

               for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                   particle = particles[ i++ ];
                   particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                   particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
               }
           }
           renderer.render( scene, camera );

           count += 0.1;

       }
   </script>
</body>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('#name').bind("input propertychange change",function() {
        if($('#name').val() != ''){
            $('.remind-user').html('')
        }
    });
    $('#password').bind('input propertychange', function() {
        if($('#password').val() != ''){
            $('.remind-pwd').html('')
        }
    });
    $('#captcha').bind('input propertychange', function() {
        if($('#captcha').val() != ''){
            $('.remind-captcha').html('')
        }
    });
    function submitForm() {
        var user = $("#name").val();
        var password = $("#password").val();
        var captcha = $("#captcha").val();
        if(user == ''){
            $('.remind-user').html('用户名不能为空')
        }else if(password == ''){
            $('.remind-pwd').html('密码不能为空')
        }else if(captcha == ''){
            $('.remind-captcha').html('验证码不能为空')
        }else{
            $.ajax(
                {   type: "POST",
                    url:"/check",
                    data:{
                        "user": user,
                        "password": password,
                        "captcha": captcha,
                        },
                    dataType: "json",
                    success:function (res) {
                        if(res.code == 0){
                            window.location.href = '/admin#/user'
                        }else if(res.code == 1){    //密码错误
                            $('.remind-pwd').html('密码错误')
                        }else if(res.code == 2){    //该用户不存在
                            $('.remind-user').html('用户名不存在')
                        }else {     //验证码错误
                            $("#Captcha_img").attr("src",'{{url('captcha/get')}}?'+Math.random());
                            $('.remind-captcha').html('验证码错误')
                        }
                    },
                    error:function (response) {

                    }
                })
        }
    }
</script>
</html>
