const mongoose = require('mongoose');

// Gantilah URL MongoDB Atlas Anda di sini
const mongoURI = "mongodb+srv://aditjansaboss:4aWBdJMTXTFZxLtx@cluster0.ywzcz.mongodb.net/DB_tiket?ssl=true&authSource=admin";
// const mongoURI = "mongodb+srv://kekyfi:tiketser1234@cluster0.4isoo.mongodb.net/dbTiket?ssl=true&authSource=admin";
// const mongoURI = "mongodb://atlas-sql-6783bae76ef6bf596655bb40-4isoo.a.query.mongodb.net/dbTiket?ssl=true&authSource=admin";
// const mongoURI = "mongodb+srv://kekyfi:masuk1234@cluster0.4isoo.mongodb.net/dbTiket?ssl=true&authSource=admin";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Atlas connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);  // Exit with failure
    }
};

module.exports = connectDB;
