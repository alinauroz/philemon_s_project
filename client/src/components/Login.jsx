import React from 'react'

export default class Login extends React.Component {
    constructor (props) {
        super(props)
    }

    onChange_ = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render () {
        return (
            <div id = 'login-container'>
                <input 
                    type = 'text'
                    placeholder = 'Username'
                    onChange = {this.onChange_}
                    name="username"
                    className = "basic-input"
                />
                <input 
                    type = 'password'
                    placeholder = 'pass'
                    onChange = {this.onChange_}
                    name="username"
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