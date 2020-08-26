import React from 'react'

export default class SearchBar extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            icon: "https://www.shareicon.net/data/2016/06/17/595474_search_512x512.png"
        }
    }

    onChange_ = async (e) => {
        this.state[e.target.name] = e.target.value;
    }

    search = () => {
        this.props.getById(this.state.q);
    }

    render () {
        return (
            <div className = 'searchbar'>
                <div className = 'search-input-con'>
                    <input 
                        className = 'search-input'
                        onChange = {this.onChange_}
                        name = 'q'
                    />
                    <button
                        className = 'search-button'
                        onClick = {this.search}
                    >
                        <img src = {this.state.icon} style={{width: 18, marginTop: 2}} />
                    </button>
                </div>
                <div style={{float: "right", display: "inline-block", verticalAlign: "top", height: 28}}>
                    <input type = 'button' value = 'New Form' className = "search-new-form-button" onClick = {() => this.props.formView()} />
                </div>
            </div>
        )
    }
}