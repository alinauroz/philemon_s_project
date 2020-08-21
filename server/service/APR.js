const { toSearchObject } = require("../utils/format");

const integrations = {};

integrations.APR = require("../integration/APR");

const {toSearchObject} = require("../utils/format");

const getAll = async () => {
    try {
        return integrations.APR.search();
    }
    catch (err) {
        throw err;
    }
}

const search = async params => {
    try {
        return integrations.APR.search(toSearchObject(params));
    }
    catch (err) {
        throw err;
    }
}

const save = async file => {
    try {
        let obj = await integrations.APR.loadFile(file);
        return integrations.APR.saveMany(obg);
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAll,
    search
}