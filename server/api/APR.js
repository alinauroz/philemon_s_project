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
        let APRs = await service.APR.search((req.query.q));
        res.send(APRs);
    }
    catch (err) {
        console.log(err)
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

module.exports = Router;