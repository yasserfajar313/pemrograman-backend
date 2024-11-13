<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentControllers;
use App\Http\Controllers\MediaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

#methode get
Route :: get ('/animals', function() {
    echo "menampilkan data animals";
});
#methode post
Route :: post ('/animals', function() {
    echo "menambahkan hewan baru";
});
#methode put
Route :: put ('/animals/{id}', function() {
    echo "menupdate data hewan id $id";
});
#methode delete
Route :: delete ('/animals/{id}', function() {
    echo "menghapus  data hewan id $id";
});






Route::get('/news', [NewsController::class, 'index']); // Menampilkan semua berita
Route::post('/news', [NewsController::class, 'store']); // Menambah berita baru
Route::get('/news/{id}', [NewsController::class, 'show']); // Menampilkan berita berdasarkan ID
Route::put('/news/{id}', [NewsController::class, 'update']); // Mengupdate berita
Route::delete('/news/{id}', [NewsController::class, 'destroy']); // Menghapus berita