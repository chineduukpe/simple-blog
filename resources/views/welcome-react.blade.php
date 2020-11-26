<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
<div id="app"></div>
<script>
     window.addEventListener('scroll',function(evt){
         let nav = document.querySelector('nav').classList;
         if (window.scrollY > 100) {
             nav.remove('navbar-dark')
             return nav.add('navbar-light')
         }

         nav.remove('navbar-light')
         return nav.add('navbar-dark')
     })
</script>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>