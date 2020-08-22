const { toSearchObject } = require("../utils/format");

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

const search = async params => {
    try {
        console.log(toSearchObject(params));
        if (typeof params === "string") params = JSON.parse(params);
        return integrations.APR.search(params);
    }
    catch (err) {
        throw err;
    }
}

//search('{"TYPE_OF_IT_ACQUISITION": ["modification"]}').then(d => {
//    console.log(d.length);
//})

const saveMany = async file => {
    try {
        let obj = await integrations.APR.loadFile(file);
        return integrations.APR.saveMany(obj);
    }
    catch (err) {
        throw err;
    }
}

const saveOne = async data => {
    try {
        return integrations.APR.saveOne(data);
    }
    catch (err) {
        throw err;
    }
}

//saveMany(__dirname + "/../uploads/a.csv");

module.exports = {
    getAll,
    search,
    saveMany,
    saveOne
}