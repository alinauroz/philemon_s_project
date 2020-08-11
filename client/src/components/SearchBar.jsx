import React from 'react'

export default class SearchBar extends React.Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className = 'searchbar'>
                <input 
                    className = 'search-input'
                />
            </div>
        )
    }
}