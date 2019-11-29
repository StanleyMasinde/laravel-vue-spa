<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        {{-- App Manifest --}}
        <link rel="manifest" href="/manifest.json">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        {{-- Javascript --}}
        <script src="{{ asset('js/app.js') }}" defer></script>

        {{-- stylesheet --}}
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        {{-- App Content will be auto injected --}}
        <div id="app"></div>
        <noscript>JavaScript is required to run {{ config('app.name') }} Please enable JavaScript To continue</noscript>
    </body>
</html>
