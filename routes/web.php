<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\ServiceController;

Route::get('/', WelcomeController::class)->name('home');
Route::inertia('/client', 'client')->name('client');
Route::inertia('/karir', 'careers')->name('careers');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('faqs', FaqController::class)->except(['show']);
        Route::resource('services', ServiceController::class)->except(['show']);
    });
});

require __DIR__.'/settings.php';
