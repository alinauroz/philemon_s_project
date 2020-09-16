import React from 'react'

export default class extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div style={{display: 'inline-block'}}>
            <div className = 'filter-con'>
            <div className = 'left-bar-con'>
                <div className = 'filter'>
                    <input 
                        type = 'file'
                        onChange = {this.props.onChange}
                    />
                </div>
            </div>
            </div>
            </div>
        )
    }
}