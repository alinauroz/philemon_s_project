const express = require('express');
const Router = express.Router();

const service = {};
service.user = require("../service/user");
service.comment = require("../service/Comment")

Router.post("/", async (req, res) => {

});

Router.get("/:APR_NUM", async (req, res) => {
    try {
        let data = await service.comment.get(req.body.APR_NUM);
        return res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send({err})
    }
})

module.exports = Router;