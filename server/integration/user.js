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
            return false;
        }
        else {
            return true;
        }
    }
    catch (err) {
        throw err;
    }
}

const save = async (data) => {
    try {
        let user = new model.user(data);
        return user.save();
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    authenticate,
    save
}