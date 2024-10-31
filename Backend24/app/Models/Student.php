<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    public static function getALLSudents()
    {
        $students = DB::select('select * from students');
        return $students;
    }

    protected $fillable = ['nama', 'nim', 'email', 'jurusan'];
}
