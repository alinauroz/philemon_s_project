const integration = {}

const jwt = require('jsonwebtoken')

integration.user = require("../integration/user")

const getToken = async (username, password) => {
    try {
        let isAuthenticated = await integration.user.authenticate(username, password);
        if (isAuthenticated) {
            return jwt.sign({username}, process.env.TOKEN_KEY);
        }
        else {
            throw "Invalid username or password"
        }
    }
    catch (err) {
        throw err;
    }
}

getToken("alinauroz", "123456").then(d => {
    console.log(d)
}).catch(err => {
    console.log(err)
})

module.exports = {
    getToken
}