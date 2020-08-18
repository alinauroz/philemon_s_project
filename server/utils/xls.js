const csv=require('csvtojson');
const format = require("../utils/format")

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

//getJSON(__dirname + "/../uploads/a.csv").then(d => {
//    let row = d.data[0];
//    console.log(row);
//})

module.exports = {
    getJSON
}