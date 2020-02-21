const mongoose = require("mongoose");

// Connect to the database
function connectDB() { 
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

module.exports = connectDB;
  