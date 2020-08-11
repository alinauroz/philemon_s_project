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

getJSON(__dirname + "/../uploads/a.csv").then(d => {
    let a = d.data[0];
    s = 0;
    for (x in a) console.log(++s + " " + x + "\r\n------------")
})

module.exports = {
    getJSON
}