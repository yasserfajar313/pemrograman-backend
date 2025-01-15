// import Model Patient
const Patient = require('./ModelPatient');

// buat class PatientController
class PatientController {
  // fungsi untuk mendapatkan semua pasien
  getAllPatients() {
    // fungsi untuk mendapatkan semua pasien
    return Patient.find();
  }

  // fungsi untuk mendapatkan pasien berdasarkan ID
  getPatientById(id) {
    // untuk mendapatkan pasien berdasarkan ID
    return Patient.findById(id);
  }

  // fungsi untuk menambah pasien baru
  addPatient(patientData) {
    //  untuk menambah pasien baru
    const newPatient = new Patient(patientData);
    return newPatient.save();
  }

  // fungsi untuk mengupdate pasien berdasarkan ID
  updatePatient(id, updatedData) {
    //  untuk mengupdate pasien
    return Patient.findByIdAndUpdate(id, updatedData, { new: true });
  }

  // fungsi untuk menghapus pasien berdasarkan ID
  deletePatient(id) {
    // Logika untuk menghapus pasien
    return Patient.findByIdAndDelete(id);
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
