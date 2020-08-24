import React from 'react'

const API = "http://localhost:3002/"

export default class Login extends React.Component {
    constructor (props) {
        super(props)
    }

    login = async () => {

        /*
            login function sends a post request to the API with username and password.
            In response, the API sends user token in response if all is well otherwise
            the API sends an error.
            If token is received, this function saves the token value in localStorage and
            reloads the page.
        */

        try {
            let username = this.state.username;
            let password = this.state.pass;
            let d = await fetch(API + "user/login", {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({username, password})
            });
            let res = await d.json();

            if (res.token) {
                window.localStorage.setItem(
                    'token', res.token
                );
                window.location.reload();
            }
            else
                alert("Error: " + res.err)
        }
        catch (err) {
            alert("Error: " + err)
        }
    }

    onChange_ = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render () {
        return (
            <div class = 'container'>
                <h1>Log In</h1>
                <input 
                    type = 'text'
                    placeholder = 'Username'
                    onChange = {this.onChange_}
                    name="username"
                    className = "basic-input"
                />
                <input 
                    type = 'password'
                    placeholder = 'Password'
                    onChange = {this.onChange_}
                    name="pass"
                    className = "basic-input"
                />
                <input
                    type = 'submit'
                    value = 'Log In'
                    onClick = {this.login}
                    className = "green-button right"
                />
            </div>
        )
    }
}