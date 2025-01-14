const express = require('express');
const connectDB = require('./src/config/db'); // Pastikan path ini benar
const biodataRoutes = require('./src/routes/biodataRoutes'); // Mengimpor rute biodata

const app = express();

// Connect to the database
connectDB();

// Middleware untuk memparsing JSON
app.use(express.json());

// Menggunakan rute biodata
app.use('/api/biodata', biodataRoutes);

// Port server
const PORT = 5000;  // Gunakan port 5000 atau yang Anda inginkan
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
