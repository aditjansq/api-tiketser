const mongoose = require('mongoose');

const biodataSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    noHp: { type: String, required: true },
    email: { type: String, required: true },
    tglLahir: { type: Date, required: true },
    jenisKelamin: { type: String, required: true }
});

module.exports = mongoose.model('Biodata', biodataSchema);
