<?php

use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\UserSettingsController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->middleware(['role:Sistēmas administrators', 'auth'])->group(function () {

    Route::post('/roles/{role}/toggle-permission', [RoleController::class, 'togglePermission'])->name('roles.toggle-permission');
    Route::resource('roles', RoleController::class);

    Route::get('users/datatable', [UserController::class, 'datatable'])->name('users.datatable');
    Route::post('users/{user}/toggle-role', [UserController::class, 'toggleRole'])->name('users.toggle-role');
    Route::get('users/{user}/avatar', [UserController::class, 'avatar'])->name('users.avatar');
    Route::resource('users', UserController::class)->except(['edit', 'destroy']);
});

Route::post('user-settings/update-components', [UserSettingsController::class, 'updateComponents'])
    ->middleware(['auth', 'verified'])->name('user-settings.update-components');
