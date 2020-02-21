// Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

// Connection
const connectDB = require("./config/connectDB.js");

// Add body parser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set static folder to retrieve css and js files
app.use(express.static(path.join(__dirname + '/public')));

// Routes 
app.use(require("./routes/api.js"));

//Connect to database
connectDB();

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


