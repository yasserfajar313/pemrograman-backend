// import PatientController
const PatientController = require('./PatientController'); 

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
let resources = [
  {
    id: 1,
    name: "abdul",
    phone: "081234567890",
    address: "Jl. Merdeka No. 1",
    status: "positive",
    admissionDate: "2025-01-01",
    dischargeDate: null,
  },
  {
    id: 2,
    name: "siti",
    phone: "082345678901",
    address: "Jl. Sudirman No. 2",
    status: "recovered",
    admissionDate: "2024-12-20",
    dischargeDate: "2025-01-05",
  },
  {
    id: 3,
    name: "romlah",
    phone: "083456789012",
    address: "Jl. Diponegoro No. 3",
    status: "dead",
    admissionDate: "2024-12-15",
    dischargeDate: "2024-12-25",
  },
];

//mendapatkan semua pasien
router.get("/patients", async (req, res) => {
  try {
    const patients = await PatientController.getAllPatients();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//mendapatkan pasien berdasarkan ID
router.get("/patients/:id", async (req, res) => {
  try {
    const patient = await PatientController.getPatientById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//menambah pasien baru
router.post("/patients", async (req, res) => {
  try {
    const newPatient = await PatientController.addPatient(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//  mengupdate pasien berdasarkan ID
router.put("/patients/:id", async (req, res) => {
  try {
    const updatedPatient = await PatientController.updatePatient(req.params.id, req.body);
    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//  menghapus pasien berdasarkan ID
router.delete("/patients/:id", async (req, res) => {
  try {
    const deletedPatient = await PatientController.deletePatient(req.params.id);
    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// export router
module.exports = router;
