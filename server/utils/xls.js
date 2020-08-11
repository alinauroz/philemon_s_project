const csv=require('csvtojson')

const getJSON = async filepath => {
    try {
        let data = await csv().fromFile(filepath);
        let length = data.length;
        return {data, length}
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getJSON
}