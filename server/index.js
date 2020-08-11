const mongoose = require('mongoose');
require('dotenv').config();

require("./service/user")

const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log("connected")
});