const express = require('express');
const mongoose = require("mongoose");

require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// If deployed, use the deployed database. Otherwise use the local feedBackApp database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/feedBackApp";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

const PORT = process.env.PORT || 8080;
app.listen(PORT);

