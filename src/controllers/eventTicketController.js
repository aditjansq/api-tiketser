const EventTicketsModel = require('../models/eventTicketsModel'); // Pastikan path ini benar  
  
// Mendapatkan semua event tickets  
exports.getAllEventTickets = async (req, res) => {  
    try {  
        const eventTickets = await EventTicketsModel.find();  
        res.status(200).json(eventTickets);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
};  
  
// Menambahkan event ticket baru  
exports.createEventTicket = async (req, res) => {  
    const eventTicket = new EventTicketsModel(req.body);  
    try {  
        const savedEventTicket = await eventTicket.save();  
        res.status(201).json(savedEventTicket);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
};  
  
// Mendapatkan event ticket berdasarkan ID  
exports.getEventTicketById = async (req, res) => {  
    try {  
        const eventTicket = await EventTicketsModel.findById(req.params.id);  
        if (!eventTicket) return res.status(404).json({ message: 'Event ticket not found' });  
        res.status(200).json(eventTicket);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
};  
  
// Mengupdate event ticket  
exports.updateEventTicket = async (req, res) => {  
    try {  
        const updatedEventTicket = await EventTicketsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });  
        if (!updatedEventTicket) return res.status(404).json({ message: 'Event ticket not found' });  
        res.status(200).json(updatedEventTicket);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
};  
  
// Menghapus event ticket  
exports.deleteEventTicket = async (req, res) => {  
    try {  
        const deletedEventTicket = await EventTicketsModel.findByIdAndDelete(req.params.id);  
        if (!deletedEventTicket) return res.status(404).json({ message: 'Event ticket not found' });  
        res.status(204).send();  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
};  
