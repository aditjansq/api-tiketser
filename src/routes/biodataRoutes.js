const express = require('express');
const router = express.Router();
const { getAllBiodata, addBiodata } = require('../controllers/biodataController');

// Endpoint untuk mendapatkan semua biodata
router.get('/', getAllBiodata);

// Endpoint untuk menambahkan biodata baru
router.post('/', addBiodata);

module.exports = router;
