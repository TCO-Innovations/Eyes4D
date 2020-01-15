@extends('layouts.app')

@section('content')
    <div class="mx-auto w-1/3 bg-white mt-40">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow px-6 py-6">
                    <div class="mb-6">{{ __('Sign In') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div class="mb-6">
                                <label for="email" class="block mb-2">
                                    {{ __('Email Address') }}
                                </label>

                                <div class="col-md-6">
                                    <input
                                        id="email"
                                        type="email"
                                        class="w-full px-4 py-2 border @error('email') is-invalid @enderror"
                                        name="email"
                                        value="{{ old('email') }}"
                                        required
                                        autocomplete="email"
                                        autofocus
                                    />

                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="mb-6">
                                <label for="password" class="block mb-2">
                                    {{ __('Password') }}
                                </label>

                                <div class="col-md-6">
                                    <input
                                        id="password"
                                        type="password"
                                        class="w-full px-4 py-2 border @error('password') is-invalid @enderror"
                                        name="password"
                                        required
                                        autocomplete="current-password"
                                    />

                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="mb-6">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-6">
                                <div class="flex justify-between items-center">
                                    <button type="submit" class="bg-blue-700 text-white py-2 px-5">
                                        {{ __('Sign In') }}
                                    </button>

                                    @if (Route::has('password.request'))
                                        <a class="btn btn-link" href="{{ route('password.request') }}">
                                            {{ __('Forgot Your Password?') }}
                                        </a>
                                    @endif
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
