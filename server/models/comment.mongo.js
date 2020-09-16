const mongoose = require('mongoose');

const CommentSchema = {
  APR_NUM: {
    type: String,
    required: true,
  },
  User: {
    type: Number,
    required: true,
  },
  Comment: {
      type: String,
      required: true
  }
};

module.exports = mongoose.model('Comment', CommentSchema);