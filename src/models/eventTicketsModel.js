const mongoose = require('mongoose');  
  
// Skema untuk tiket  
const ticketSchema = new mongoose.Schema({  
    regular: {  
        price: { type: Number, required: true },  
        description: { type: String, required: true },  
        quantity: { type: Number, required: true }  
    },  
    vip: {  
        price: { type: Number, required: true },  
        description: { type: String, required: true },  
        quantity: { type: Number, required: true }  
    }  
});  

// Skema untuk event ticket  
const eventTicketsSchema = new mongoose.Schema({  
    name: { type: String, required: true },  
    tickets: { type: ticketSchema, required: true }  
});  

// Membuat model dari skema  
const EventTicketsModel = mongoose.model('EventTickets', eventTicketsSchema, 'eventTickets');  

// Mengeksport model  
module.exports = EventTicketsModel;  
