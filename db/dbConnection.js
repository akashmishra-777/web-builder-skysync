const mongoose = require('mongoose');

// Load environment variables from .env file
async function connectDB(){
    try {
        // Load environment variables from .env file
        await mongoose.connect(process.env.MONGO_URI);
        // Optional: Set mongoose to use the global promise library
        console.log("DATABASE IS CONNECTED SUCCESSFULLY");

    } catch (error) {

        // Handle the error here, e.g., log it or send a response
        console.error("DATABASE CONNECTION ERROR", error.message);
    }
}


// Call the function to connect to the database
// This will establish the connection when this module is loaded
const dbConnectionReference = connectDB();


// Export the connection reference for use in other modules
module.exports = dbConnectionReference;