const integration = {}

const jwt = require('jsonwebtoken');

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
        console.log(err)
        throw err;
    }
}

const getUserFromToken = async (token) => {
    let payload = jwt.verify(token, process.env.TOKEN_KEY);
    if (payload.username) {
        
    }
    else {
        throw "Invalid token"
    }
}

getUserFromToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdXJvejk5IiwiaWF0IjoxNjAwMjY4MDY0fQ.bpzEbBt6qTql3oxh8Wd2PfpxnHlRvD17ni4kfKGdjRI")

const register = async (data) => {
    try {
        if (data.username && data.email && data.password && data.name) {
            return await integration.user.save(data)
        }
        else {
            throw "Incomplete Input"
        }
    }
    catch (err) {
        throw err;
    }
}

//getToken("philemon", "123456").then(d => {
//    console.log(d)
//}).catch (err => {
//    console.log("Problem")
//})

module.exports = {
    getToken,
    register
}