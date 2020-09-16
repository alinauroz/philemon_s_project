const service = {};

service.comment = require('../integration/Comment');

const save = async data => {
    return service.comment.saveComment(data);
}

const get = async APR_NUM => {
    return service.comment.getComments(APR_NUM);
}

module.exports = {
    save,
    get
}