import React from 'react'

export default class Signup extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    signup = () => {
        let username = this.state.username;
        let pass = this.state.pass;
        let email = this.state.email;

        if (pass.length < 6) {
            return alert("Password length should be at leat 6")
        }
        if (username.length < 3) {
            return alert("Username length should be at leat 3")
        }

    }

    onChange_ = (e) => {
        this.setState({[e.target.name] : e.target.value})
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
                    type = 'email'
                    placeholder = 'Email'
                    onChange = {this.setUsername}
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
                    onClick = {""}
                    className = "green-button right"
                />
            </div>
        )
    }
}