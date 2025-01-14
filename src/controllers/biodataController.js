const Biodata = require('../models/biodataModel');

// Fungsi untuk mendapatkan semua biodata
const getAllBiodata = async (req, res) => {
    try {
        const biodata = await Biodata.find();
        res.json(biodata);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Fungsi untuk menambahkan biodata baru
const addBiodata = async (req, res) => {
    const { nama, noHp, email, tglLahir, jenisKelamin } = req.body;

    const biodata = new Biodata({
        nama,
        noHp,
        email,
        tglLahir,
        jenisKelamin
    });

    try {
        const newBiodata = await biodata.save();
        res.status(201).json(newBiodata);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getAllBiodata, addBiodata };
