<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
    <title>Larvuent</title>
</head>
<body>
    <div id="app"></div>
       
    <script src="{{ mix('js/admin.js') }}"></script>
</body>
</html>