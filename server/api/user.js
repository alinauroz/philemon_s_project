const service = {};

const express = require('express');
const bodyParser = require('body-parser')
service.user = require("../service/user")

const Router = express.Router();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


Router.post("/login", async (req, res) => {
    try {
        let token = await service.user.getToken(req.body.username, req.body.password);
        res.send({token});
    }
    catch (err) {
        res.send({err})
    }
})

module.exports = Router;