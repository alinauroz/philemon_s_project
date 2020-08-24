const toProcessCase = str => {
    str = str.toUpperCase();
    while (str.indexOf('/') > -1 || str.indexOf(' ') > -1) {
        str = str.replace('/', '_');
        str = str.replace(' ', '_');
    }
    return str;
}

const toSearchObject = str => {
    try {
        let obj = JSON.parse(str);
        for (let x in obj) {
            obj[x] = {$in: obj[x]}
        }
        return obj;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    toProcessCase,
    toSearchObject
}