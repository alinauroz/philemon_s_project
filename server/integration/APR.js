const APRModel = require("../models/APR.mongo");
const mongoose = require("mongoose");
const format = require('../utils/format');
const xls = require('../utils/xls');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

(async function(){
	try {
		await mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true});
		console.log("Connected to MongoDB");
	}
	catch (err) {
		throw err;
	} 
})();

const saveOne = async data => {
    try {
        let APR_ = new APRModel(data);
        return APR_.save();
    }
    catch (err) {
        throw err;
    }
}

getProcessableObject = apr => {
    let obj = {};
    for (x in apr) {
        obj[format.toProcessCase(x)] = apr[x];
    }
    return obj;
}

loadFile = async path_ => {
    try {
        let d = await xls.getJSON(path_);
        let res = [];
        d.data.map(apr => {
            res.push(getProcessableObject(apr));
        });
        return res;
    }
    catch (err) {

    }
}

//loadFile(__dirname + "/../uploads/a.csv");

//loadFile(__dirname + "/../uploads/a.csv").then(d => {
//    saveMany(d)
//})

const saveMany = async data => {
    try {
        return await APRModel.insertMany(data)
    }
    catch (err) {
        throw err;
    }
}

const search = async params => {
    try {
        return await APRModel.find(params);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

const update = async (_id, newData) => {
    try {
        return APRModel.findOneAndUpdate({_id}, newData);
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    saveOne,
    saveMany,
    loadFile,
    search,
    update
}