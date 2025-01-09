// TODO 3: Import data students dari folder data/students.js
// code here

const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  index = (req, res) => {
    // TODO 4: Tampilkan data students
    // code here
    res.status(200).json({
      message: 'Daftar Mahasiswa',
      data: students,
    });
  };

  store = (req, res) => {
    // TODO 5: Tambahkan data students
    // code here
    const { nama, nim } = req.body;

    if (!nama || !nim ) {
      return res.status(400).json({
        message: 'Nama dan Nim Wajib',
      });
    }

    const newStudent = {
      id: students.length > 0 ? students[students.length - 1].id + 1 : 1, // Handle ID untuk list kosong
            nama,
      nim: parseInt(nim),
    };

    students.push(newStudent);

    res.status(201).json({
      message: 'Mahasiswa berhasil di tambah',
      data: newStudent,
    });
  };

  update = (req, res) => {
    // TODO 6: Update data students
    // code here
    const { id } = req.params;
        const { nama, nim } = req.body;

        // Cari data mahasiswa berdasarkan ID
        const student = students.find((s) => s.id === parseInt(id));

        // Jika data tidak ditemukan
        if (!student) {
            return res.status(404).json({
                message: ' Mahasiswa tidak ditemukan',
            });
        }

        // Update nama dan umur
        if (nama) student.nama = nama;
        if (nim) student.nim = parseInt(nim);

        res.status(200).json({
            message: ' Mahasiswa berhasil diperbarui',
            updatedId: id, // Mengembalikan ID yang telah diperbarui
            data: student,
        });
  }

  destroy = (req, res) => {
    // TODO 7: Hapus data students
    // code here
    const { id } = req.params;

        // Cari index mahasiswa berdasarkan ID
        const studentIndex = students.findIndex((s) => s.id === parseInt(id));

        // Jika data tidak ditemukan
        if (studentIndex === -1) {
            return res.status(404).json({
                message: ' Mahasiswa tidak ditemukan',
            });
        }

        // Hapus data dari array
        students.splice(studentIndex, 1);

        res.status(200).json({
            message: ' Mahasiswa berhasil dihapus',
            deletedId: id, // Mengembalikan ID yang telah dihapus
        });
  };
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
