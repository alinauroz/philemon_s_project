const express = require('express');
const service = {};
const bodyParser = require('body-parser');
service.APR = require("../service/APR");
const multer = require("multer");

const Router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        req.filename = 'csv' + Date.now() + '.csv';
        cb(null, req.filename)
    }
})

const upload = multer({ storage });

Router.use(bodyParser.urlencoded({ extended: false }));
Router.use(bodyParser.json());

Router.post("/csv", upload.single('csv'), async (req, res) => {
    try {
        let d = await service.APR.saveMany(req.filename);
        res.send({name: req.filename});
    }
    catch (err) {
        res.send({err})
    }
});

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

Router.post("/update", async (req, res) => {
    try {
        let _id = req.body._id;
        let newData = req.body;
        let res_ = await service.APR.update(_id, newData);
        res.send({res_});
    }
    catch (err) {
        console.log(err);
        res.send({err})
    }
})

module.exports = Router;