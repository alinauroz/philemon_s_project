const express = require('express');
const service = {};
service.APR = require("../service/APR");

const Router = express.Router();

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

module.exports = Router;