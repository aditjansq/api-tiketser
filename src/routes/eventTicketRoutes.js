const express = require('express');  
const router = express.Router();  
const eventTicketController = require('../controllers/eventTicketController');  
  
// Mendapatkan semua event tickets  
router.get('/', eventTicketController.getAllEventTickets);  
  
// Menambahkan event ticket baru  
router.post('/', eventTicketController.createEventTicket);  
  
// Mendapatkan event ticket berdasarkan ID  
router.get('/:id', eventTicketController.getEventTicketById);  
  
// Mengupdate event ticket  
router.put('/:id', eventTicketController.updateEventTicket);  
  
// Menghapus event ticket  
router.delete('/:id', eventTicketController.deleteEventTicket);  
  
module.exports = router;  
