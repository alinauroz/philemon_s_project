import React from 'react'

export default class APR extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className = 'container'>
                <div className = 'topbar-apr'>
                    <span className = 'apr-classification-container'>{this.props.data.classification}</span>
                    <span className = 'apr-no'>APR # - {this.props.data.no}</span>
                </div>
            </div>
        )
    }

}