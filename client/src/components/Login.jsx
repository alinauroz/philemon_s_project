import React from 'react'

const API = "http://localhost:3002/"

export default class Login extends React.Component {
    constructor (props) {
        super(props)
    }

    login = async () => {
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
            let res = d.json();

            if (res.err)
                alert(`Error: ${res.err}`)
            else {
                window.localStorage.setItem(
                    'token', res.token
                );
                window.location.reload();
            }
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