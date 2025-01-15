const express = require('express');  
const connectDB = require('./src/config/db'); // Pastikan path ini benar  
const biodataRoutes = require('./src/routes/biodataRoutes'); // Mengimpor rute biodata  
const eventRoutes = require('./src/routes/eventRoutes'); // Mengimpor rute event  
const eventTicketRoutes = require('./src/routes/eventTicketRoutes'); // Mengimpor rute event tickets 
  
const app = express();  
  
// Connect to the database  
connectDB();  
  
// Middleware untuk memparsing JSON  
app.use(express.json());  
  
// Menggunakan rute biodata  
app.use('/api/biodata', biodataRoutes);  
  
// Menggunakan rute event  
app.use('/api/events', eventRoutes); // Menambahkan rute untuk event  

// Menggunakan rute event tickets  
app.use('/api/eventTickets', eventTicketRoutes); // Menambahkan rute untuk event tickets  
  
// Port server  
const PORT = 5000;  // Gunakan port 5000 atau yang Anda inginkan  
app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);  
});  
