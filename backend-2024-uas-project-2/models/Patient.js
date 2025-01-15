// import database
const mongoose = require('mongoose');

// membuat class Patient
// Membuat schema untuk Patient
const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'discharged'],
    default: 'active'
  },
  admissionDate: {
    type: Date,
    required: true
  },
  dischargeDate: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Membuat class Patient menggunakan schema
class Patient {
  static async getAllPatients() {
    return await mongoose.model('Patient', patientSchema).find();
  }

  static async getPatientById(id) {
    return await mongoose.model('Patient', patientSchema).findById(id);
  }

  static async addPatient(patientData) {
    const PatientModel = mongoose.model('Patient', patientSchema);
    const newPatient = new PatientModel(patientData);
    return await newPatient.save();
  }

  static async updatePatient(id, updatedData) {
    return await mongoose.model('Patient', patientSchema).findByIdAndUpdate(id, updatedData, { new: true });
  }

  static async deletePatient(id) {
    return await mongoose.model('Patient', patientSchema).findByIdAndDelete(id);
  }
}

// export class Patient
module.exports = Patient;
