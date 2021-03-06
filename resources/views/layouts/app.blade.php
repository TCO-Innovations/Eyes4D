<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="antialiased font-sans bg-blue-800 text-gray-800 tracking-wide">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-blue-800">
    <div id="app">
        <main>
            @yield('content')
        </main>
    </div>
</body>
</html>
