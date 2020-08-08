import React from 'react'

export default class Login extends React.Component {
    constructor (props) {
        super(props)
    }

    onChange_ = (e) => {
        alert(e.target.name)
    }

    render () {
        return (
            <div id = 'login-container'>
                <input 
                    type = 'text'
                    placeholder = 'Username'
                    onChange = {this.onChange_}
                />
            </div>
        )
    }
}