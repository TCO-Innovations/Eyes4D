@extends('layouts.app')

@section('content')
<div class="mx-auto w-1/3 mt-40">
    @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>
    @endif

    <form method="POST" action="{{ route('password.email') }}" class="bg-gray-200 shadow rounded-lg overflow-hidden text-sm">

        @csrf

        <header class="px-6 mb-6 py-4 bg-white">
            <h1>{{ __('Reset password') }}</h1>
        </header>

        <div class="px-6">
            <label for="email">{{ __('Email address') }}</label>
            <input id="email" type="email" class="form-input w-full mt-2 rounded-lg @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
            @error('email')
            <span class="inline-block mt-2 text-sm text-red-500" role="alert">{{ $message }}</span>
            @enderror
        </div>

        <footer class="px-6 mt-6 mb-6">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="bg-blue-700 text-white py-3 px-5 rounded-lg font-medium">{{ __('Send password reset link') }}</button>
            </div>
        </footer>
    </form>
</div>
@endsection
