@extends('layouts.app')

@section('content')
<div class="mx-auto w-1/3 mt-40">
    @if (session('status'))
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b-lg text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                    <p class="font-bold">{{ session('status') }}</p>
                    <p class="text-sm">Make sure you know how these changes affect you.</p>
                </div>
            </div>
        </div>
    @endif

    <form method="POST" action="{{ route('password.email') }}" class="bg-gray-200 shadow rounded-lg overflow-hidden text-sm mt-6">

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
            <button type="submit" class="bg-blue-700 text-white py-3 px-5 rounded-lg font-medium">{{ __('Send password reset link') }}</button>
        </footer>
    </form>
</div>
@endsection
