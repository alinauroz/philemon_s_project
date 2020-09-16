const CommentModel = require("../models/Comment.mongo");
const mongoose = require("mongoose");
require('dotenv').config();

const saveComment = (data) => {
    try {
        let comment = new CommentModel(data);
        return comment.save();
    }
    catch (err) {
        throw err;
    }
}

const getComments = (APR_NUM) => {
    try {
        return CommentModel.find({APR_NUM})
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    saveComment,
    getComments
}