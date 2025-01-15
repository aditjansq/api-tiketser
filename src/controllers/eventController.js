const Event = require('../models/eventModel');  
  
// Fungsi untuk mendapatkan semua acara  
const getAllEvents = async (req, res) => {  
    try {  
        const events = await Event.find();  
        res.json(events);  
    } catch (err) {  
        res.status(500).json({ message: err.message });  
    }  
};  
  
// Fungsi untuk menambahkan acara baru  
const addEvent = async (req, res) => {  
    const { name, location, price, image, date } = req.body;  
  
    const event = new Event({  
        name,  
        location,  
        price,  
        image,  
        date  
    });  
  
    try {  
        const newEvent = await event.save();  
        res.status(201).json(newEvent);  
    } catch (err) {  
        res.status(400).json({ message: err.message });  
    }  
};  
  
module.exports = { getAllEvents, addEvent };  
