const express = require('express');
const service = {};
const bodyParser = require('body-parser');
service.APR = require("../service/APR");

const Router = express.Router();

Router.use(bodyParser.urlencoded({ extended: false }));
Router.use(bodyParser.json());

Router.get("/", async (req, res) => {
    try {
        let APRs = await service.APR.getAll();
        res.send(APRs);
    }
    catch (err) {
        res.send({err: err})
    }
});

Router.get("/search", async (req, res) => {
    try {
        let APRs = await service.APR.search(JSON.parse(req.query.q));
        res.send(APRs);
    }
    catch (err) {
        res.send({err: err})
    }
});

Router.post("/", async (req, res) => {
    try {
        let data = req.body;
        await service.APR.saveOne(data);
        return res.send( {msg: "Saved"});
    }
    catch (err) {
        console.log(err);
        res.send({err});
    }
});

Router.post("/file", async (req, res) => {
    try {
        await service.APR.saveMany(__dirname + "/../uploads/a.csv");
        res.send({msg: "Loaded CSV file into DB"})
    }
    catch (err) {
        res.send({err})
    }
})

module.exports = Router;