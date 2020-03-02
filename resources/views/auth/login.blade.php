@extends('layouts.app')

@section('content')
    <div class="mx-auto w-1/3 mt-40">
        <form method="POST" action="{{ route('login') }}" class="bg-gray-200 shadow rounded-lg overflow-hidden text-sm">
            @csrf

            <header class="px-6 mb-6 py-4 bg-white">
                <h1>{{ __('Sign in') }}</h1>
            </header>

            <div class="px-6">
                <section class="mb-6">
                    <label for="email" class="block mb-2">{{ __('Email address') }}</label>
                    <div class="col-md-6">
                        <input id="email" type="email" class="form-input w-full rounded-lg @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus >
                        @error('email')
                        <span class="inline-block mt-2 text-sm text-red-500" role="alert">{{ $message }}</span>
                        @enderror
                    </div>
                </section>

                <section class="mb-6">
                    <label for="password" class="block mb-2">{{ __('Password') }}</label>
                    <div class="col-md-6">
                        <input id="password" type="password" class="form-input w-full rounded-lg @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" >
                        @error('password')
                        <span class="inline-block mt-2 text-sm text-red-500" role="alert">{{ $message }}</span>
                        @enderror
                    </div>
                </section>

                <section class="mb-6">
                    <div class="col-md-6 offset-md-4">
                        <div class="form-check">
                            <input class="form-checkbox h-4 w-4 mr-2" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }} >
                            <label for="remember">{{ __('Remember me') }}</label>
                        </div>
                    </div>
                </section>
            </div>

            <footer class="px-6 mb-6">
                <div class="flex justify-between items-center">
                    <button type="submit" class="bg-blue-700 text-white py-2 px-5 rounded-lg font-medium">{{ __('Sign in') }}</button>
                    @if (Route::has('password.request'))
                        <a class="underline hover:text-blue-500" href="{{ route('password.request') }}">{{ __('Forgot your password?') }}</a>
                    @endif
                </div>
            </footer>
        </form>
    </div>
@endsection
