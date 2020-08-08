const e = require("express");

const model = {}

model.user = require("../models/user.mongo");

const authenticate = async (username, password) => {
    try {
        let user = await model.user.find({
            username,
            password
        })
        if (user.length < 1) {
            throw "Invalid username or password"
        }
        else {
            return true;
        }
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    authenticate
}