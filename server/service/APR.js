const integrations = {};

integrations.APR = require("../integration/APR");

const getAll = async () => {
    try {
        return integrations.APR.search();
    }
    catch (err) {
        throw err;
    }
}

const search = async searchString => {
    try {
        //return 
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAll,
    search
}