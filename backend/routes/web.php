<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WareController;

Route::get('/', function () {
    return response()->json();
});

Route::post('/api/wares', [WareController::class, 'store']);

//route for updating the quantity of a ware. Used in both UC1 and UC2
Route::patch('api/wares/{barcode}', [WareController::class, 'update']);

Route::get('/api/wares', [WareController::class, 'getAll']);

Route::get('/api/wares/{barcode}', [WareController::class, 'getByBarcode']);

Route::delete('/api/wares/{barcode}',[WareController::class, 'delete']);
