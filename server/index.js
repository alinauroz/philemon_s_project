const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const APRRouter = require("./api/APR");
const UserRouter = require("./api/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/APR", APRRouter);
app.use("/user", UserRouter);

const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log("connected")
});

app.listen(3002)