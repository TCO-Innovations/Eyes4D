@extends('layouts.app')

@section('content')
    <div class="mx-auto w-1/3 mt-40">
        <form method="POST" action="{{ route('password.update') }}" class="bg-gray-200 shadow rounded-lg overflow-hidden text-sm">

            @csrf

            <header class="px-6 mb-6 py-4 bg-white">
                <h1>{{ __('Reset Password') }}</h1>
            </header>

            <div class="px-6">
                <input type="hidden" name="token" value="{{ $token }}">

                <section class="mt-6">
                    <label for="email">{{ __('Email address') }}</label>
                    <input id="email" type="email" class="form-input w-full rounded-lg mt-2 @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
                    @error('email')
                    <span class="inline-block mt-2 text-sm text-red-500" role="alert">{{ $message }}</span>
                    @enderror
                </section>

                <section class="mt-6">
                    <label for="password">{{ __('Password') }}</label>
                    <div class="col-md-6">
                        <input id="password" type="password" class="form-input w-full rounded-lg mt-2 @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                        @error('password')
                        <span class="inline-block mt-2 text-sm text-red-500" role="alert">{{ $message }}</span>
                        @enderror
                    </div>
                </section>

                <section class="mt-6">
                    <label for="password-confirm">{{ __('Confirm Password') }}</label>
                    <input id="password-confirm" type="password" class="form-input w-full rounded-lg mt-2" name="password_confirmation" required autocomplete="new-password">
                </section>
            </div>

            <footer class="px-6 mt-6 mb-6">
                <button type="submit" class="bg-blue-700 text-white py-3 px-5 rounded-lg font-medium">{{ __('Reset Password') }}</button>
            </footer>
        </form>
    </div>
@endsection
