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
        return integrations.APR.search(toSearchObject(params));
    }
    catch (err) {
        throw err;
    }
}

search('{"TYPE_OF_IT_ACQUISITION": ["modification"]}').then(d => {
    console.log(d.length);
})

const saveMany = async file => {
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
    search,
    saveMany
}