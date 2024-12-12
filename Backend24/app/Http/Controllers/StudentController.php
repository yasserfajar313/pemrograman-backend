<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return response()->json($students, 200);
    }

    public function store(Request $request)
    {
        $student = new Student();
        $student->nama = $request->input('nama');
        $student->nim = $request->input('nim');
        $student->email = $request->input('email');
        $student->jurusan = $request->input('jurusan');
        $student->save();
        return response()->json(['message' => 'Student created successfully'], 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);
        $student->update($request->all());
        return response()->json(['message' => 'Student updated successfully'], 200);
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();
        return response()->json(['message' => 'Student deleted successfully'], 200);
    }
}