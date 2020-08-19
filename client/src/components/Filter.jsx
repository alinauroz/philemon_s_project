import React from 'react'
import FilterCheckbox from './FilterCheckbox'

export default class Filter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            store: {}
        }
    }

    toggleStore = async (key, value) => {
        if (this.state.store[key]) {
            this.state.store[key].indexOf (value) == -1 ?
                                            this.state.store[key].push(value)
                                            : this.state.store[key].splice(this.state.store[key].indexOf(value), 1);
        }
        else {
            this.state.store[key] = [value];
        }
        this.props.onFiltersUpdate(this.state.store);
    }

    render () {
        return (
            <div className = 'left-bar-con'>
                <div className = 'left-bar-top'>
                    Filters
                </div>
                <div className = 'filter-unit'>
                    <p className = 'filter-unit-title'>
                        Classification
                    </p>
                    <FilterCheckbox 
                        title = "U"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "U/FOUO"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "S"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <p className = 'filter-unit-title'>
                        Company
                    </p>
                    <FilterCheckbox 
                        title = "CSRA"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "TBD"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "CSRA, LLC"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "DTSPO"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "ITA"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "Northrup Grumman"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "Radiant Logic"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "SEWP"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "Tester Company"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <p className = 'filter-unit-title'>
                        Acquisition Type
                    </p>
                    <FilterCheckbox 
                        title = "Serivice"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "Software"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                    <FilterCheckbox 
                        title = "Hardware"
                        key_ = "DOCUMENT_CLASSIFICATION"
                        toggleStore = {this.toggleStore}
                    />
                </div>
            </div>
        )
    }
}