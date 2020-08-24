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
        params = toSearchObject(params);
        console.log(params)
        return integrations.APR.search(params);
    }
    catch (err) {
        throw err;
    }
}

search('{"REC_AWARD_ACTION_TYPE": ["new"]}').then(d => {
    console.log(d.length)
})

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

//1. loads data from csv
//2. Applies toProcessFunction e.g hello/world to HELLOW_WORLD
//3. it saves this object to mongodb

//saveMany(__dirname + "/../uploads/a.csv")

const saveOne = async data => {
    try {
        return integrations.APR.saveOne(data);
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAll,
    search,
    saveMany,
    saveOne
}