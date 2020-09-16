const express = require('express');
const Router = express.Router();

const service = {};
service.user = require("../service/user");
service.comment = require("../service/Comment")

Router.post("/", async (req, res) => {
    try {
        let users = await service.user.getUserFromToken(req.body.token);
        let user = users[0];
        await service.comment.save({
            APR_NUM: req.body.APR_NUM,
            User: user._id,
            Comment: req.body.comment
        });
        res.send({msg: "commented"})
    }
    catch (err) {
        res.status(400).send({err})
    }
});

Router.get("/:APR_NUM", async (req, res) => {
    try {
        let data = await service.comment.get(req.params.APR_NUM);
        return res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send({err})
    }
})

module.exports = Router;