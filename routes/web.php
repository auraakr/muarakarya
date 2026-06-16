<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\CareersController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\CareerController;
use App\Http\Middleware\AdminMiddleware;

Route::get('/', WelcomeController::class)->name('home');
Route::inertia('/client', 'client')->name('client');
Route::get('/karir', CareersController::class)->name('careers');

Route::middleware(['auth', 'verified', AdminMiddleware::class])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('faqs', FaqController::class)->except(['show']);
        Route::resource('services', ServiceController::class)->except(['show']);
        Route::resource('careers', CareerController::class)->except(['show']);
    });

    Route::get('/bersih', function () {
        \Illuminate\Support\Facades\Artisan::call('optimize:clear');
        return 'Cache berhasil dibersihkan!';
    });
});

require __DIR__.'/settings.php';
