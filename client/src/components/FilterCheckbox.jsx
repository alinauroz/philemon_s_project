import React from 'react'

export default class FilterCheckbox extends React.Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
        <div className = 'filter-elem'>
            <input 
                type = 'checkbox' 
                onClick = {() => this.props.toggleStore(this.props.key_, this.props.title)}
            />
            <p className ='filter-elem-title'>{this.props.title}</p>
        </div>
    )
    }
}