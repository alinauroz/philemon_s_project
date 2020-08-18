import React from 'react'

export default class Login extends React.Component {
    constructor (props) {
        super(props)
    }

    login = () => {
        let username = this.state.username;
        let pass = this.state.pass;

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
                    onClick = {""}
                    className = "green-button right"
                />
            </div>
        )
    }
}