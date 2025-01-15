const express = require('express');  
const router = express.Router();  
const { getAllEvents, addEvent } = require('../controllers/eventController');  
  
// Rute untuk mendapatkan semua acara  
router.get('/', getAllEvents);  
  
// Rute untuk menambahkan acara baru  
router.post('/', addEvent);  
  
module.exports = router;  
