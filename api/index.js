// Import express
let express = require("express");

// Import Body parser
let bodyParser = require("body-parser");

// Import Mongoose
let mongoose = require("mongoose");

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

let uri =
  "mongodb+srv://limpeAquiUser:lauser01@clustercypherneo-gooxl.mongodb.net/test?retryWrites=true&w=majority";

// Connect to Mongoose and set connection variable
mongoose.connect(uri, { useNewUrlParser: true });
var db = mongoose.connection;

// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express"));

// Import routes
let apiRoutes = require("./api-routes");

// Use Api routes in the App
app.use("/api", apiRoutes);

// Launch app to listen to specified port
app.listen(port, function() {
  console.log("Running LimpeAquiAPI on port " + port);
});
