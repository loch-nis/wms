<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WareController;

Route::get('/', function () {
    return file_get_contents(public_path('test.html'));
});


//route for creating a ware new and add it to the database
Route::post('/api/wares', [WareController::class, 'store']);


//route for updating the quantity of a ware. Used in both UC1 and UC2
Route::patch('api/wares/{barcode}', [WareController::class, 'update']);


//route for getting all wares.
Route::get('/api/wares', [WareController::class, 'getAllWares']);


//route for getting ware by barcode
Route::get('/api/wares/{barcode}', [WareController::class, 'getWareByBarcode']);

