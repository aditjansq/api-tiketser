const mongoose = require('mongoose');  
  
const eventSchema = new mongoose.Schema({  
    name: { type: String, required: true },  
    location: { type: String, required: true },  
    price: { type: Number, required: true },  
    image: { type: String, required: true },  
    date: {  
        day: { type: String, required: true },  
        month: { type: String, required: true },  
        year: { type: String, required: true }  
    }  
});  
  
const Event = mongoose.model('Event', eventSchema);  
  
module.exports = Event;  
