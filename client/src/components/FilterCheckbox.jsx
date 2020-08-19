import React from 'react'

export default class FilterCheckbox extends React.Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
        <div className = 'filter-elem'>
            <input type = 'checkbox' />
            <p className ='filter-elem-title'>{this.props.title}</p>
        </div>
    )
    }
}