const toProcessCase = str => {
    str = str.toUpperCase();
    while (str.indexOf('/') > -1 || str.indexOf(' ') > -1) {
        str = str.replace('/', '_');
        str = str.replace(' ', '_');
    }
    return str;
}

module.exports = {
    toProcessCase
}