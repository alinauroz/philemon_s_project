import React from 'react'

const API = "http://localhost:3002/"

export default class Signup extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: ""
        }
    }

    signup = async () => {
        let username = this.state.username;
        let password = this.state.pass;
        let email = this.state.email;
        let name = this.state.name;

        if (password.length < 6) {
            return alert("Password length should be at leat 6")
        }
        if (username.length < 3) {
            return alert("Username length should be at leat 3")
        }

        alert("Registering You ...")

        let d = await fetch(API + "user/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({username, password, email, name})
        });

        let res_ = await d.json();

        if (res_.err) {
            alert("There was some problem while registering you");
        }
        else {
            alert("Register. Login and continue.")
        }

    }

    onChange_ = async (e) => {
        await this.setState({[e.target.name] : e.target.value})
        console.log(this.state)
    }

    setUsername = async (e) => {
        let value = e.target.value;
        let lastIndexOfAt = value.lastIndexOf('@');
        if (lastIndexOfAt > -1) {
            await this.setState({
                "username" : value.substr(0, lastIndexOfAt),
                email: value
            })
        }
        else {
            await this.setState({
                "username" : value,
                email: value
            })
        }
    }

    render () {
        return (
            <div class = 'container'>
                <h1>Sign Up</h1>
                <input 
                    type = 'text'
                    placeholder = 'Name'
                    onChange = {this.onChange_}
                    name="name"
                    className = "basic-input"
                />
                <input 
                    type = 'email'
                    placeholder = 'Email'
                    onChange = {(e) => {this.setUsername(e); this.onChange_(e)}}
                    name="email"
                    className = "basic-input"
                />
                <input 
                    type = 'text'
                    placeholder = 'Username'
                    onChange = {this.onChange_}
                    name="username"
                    className = "basic-input"
                    value = {this.state.username}
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
                    value = 'Sign Up'
                    onClick = {this.signup}
                    className = "green-button right"
                />
            </div>
        )
    }
}