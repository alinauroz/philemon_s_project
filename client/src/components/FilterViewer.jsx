import React from 'react';

export default class FilterViewer extends React.Component {
    
    constructor (props) {
        super (props)
    }


    render () {
        return (
            <div className = 'filter-list'>
            {
            this.props.list ? this.props.list.map(filter_ => {
                return <span className = 'filter-list-item'>{filter_}</span>
            }) : <></>

            }
            </div>
        )
    }

}