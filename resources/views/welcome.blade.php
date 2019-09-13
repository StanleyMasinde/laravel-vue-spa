<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <!--Manifest-->
    <link rel="manifest" href="manifest.json">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <!--styles-->
    <link rel="stylesheet" href="{{ mix( 'css/app.css') }}">
    <!--scripts-->
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/manifest.js') }}" defer></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>