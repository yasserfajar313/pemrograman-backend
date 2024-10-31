<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Property animals untuk menyimpan data hewan
    private $animals = ['Kucing', 'Anjing', 'Burung'];

    // Menampilkan seluruh data animals
    public function index()
    {
        return response()->json($this->animals);
    }

    // Menambahkan hewan baru ke array animals
    public function store(Request $request)
    {
        // Validasi input dari request
        $request->validate([
            'name' => 'required|string'
        ]);

        // Menambahkan hewan ke array
        array_push($this->animals, $request->name);

        return response()->json([
            'message' => 'Hewan berhasil ditambahkan!',
            'animals' => $this->animals
        ], 201);
    }

    // Mengupdate data hewan berdasarkan index
    public function update(Request $request, $index)
    {
        // Validasi input dari request
        $request->validate([
            'name' => 'required|string'
        ]);

        // Cek apakah index valid
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $request->name;

            return response()->json([
                'message' => 'Hewan berhasil diupdate!',
                'animals' => $this->animals
            ]);
        } else {
            return response()->json([
                'message' => 'Index tidak ditemukan!'
            ], 404);
        }
    }

    // Menghapus data hewan berdasarkan index
    public function destroy($index)
    {
        // Cek apakah index valid
        if (isset($this->animals[$index])) {
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals); // Re-index array setelah penghapusan

            return response()->json([
                'message' => 'Hewan berhasil dihapus!',
                'animals' => $this->animals
            ]);
        } else {
            return response()->json([
                'message' => 'Index tidak ditemukan!'
            ], 404);
        }
    }
}
