<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StockMovementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rotas protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Usuários
    // Apenas admin pode gerenciar usuários
    Route::middleware('role:admin')->group(function () {
        Route::apiResource('user', UserController::class);
    });

    // Categories
    // Admin e Manager podem criar/editar/deletar
    // Todos autenticados podem listar
    Route::get('categories', [CategoryController::class, 'index'])
        ->middleware('permission:get_categories');
    Route::post('categories', [CategoryController::class, 'store'])
        ->middleware('permission:create_categories');
    Route::put('categories/{category}', [CategoryController::class, 'update'])
        ->middleware('permission:edit_categories');
    Route::delete('categories/{category}', [CategoryController::class, 'destroy'])
        ->middleware('permission:delete_categories');

    // Suppliers
    Route::get('suppliers', [SupplierController::class, 'index'])
        ->middleware('permission:get_suppliers');
    Route::post('suppliers', [SupplierController::class, 'store'])
        ->middleware('permission:create_suppliers');
    Route::put('suppliers/{supplier}', [SupplierController::class, 'update'])
        ->middleware('permission:edit_suppliers');
    Route::delete('suppliers/{supplier}', [SupplierController::class, 'destroy'])
        ->middleware('permission:delete_suppliers');

    // Products
    Route::get('products', [ProductController::class, 'index'])
        ->middleware('permission:get_products');
    Route::post('products', [ProductController::class, 'store'])
        ->middleware('permission:create_products');
    Route::put('products/{product}', [ProductController::class, 'update'])
        ->middleware('permission:edit_products');
    Route::delete('products/{product}', [ProductController::class, 'destroy'])
        ->middleware('permission:delete_products');

    // Stock Movements
    Route::get('stock-movements', [StockMovementController::class, 'index'])
        ->middleware('permission:get_stock');
    Route::post('stock-movements/entry', [StockMovementController::class, 'entry'])
        ->middleware('permission:entry_stock');
    Route::post('stock-movements/out', [StockMovementController::class, 'out'])
        ->middleware('permission:out_stock');
});
