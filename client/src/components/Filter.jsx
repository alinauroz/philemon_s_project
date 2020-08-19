import React from 'react'
import FilterCheckbox from './FilterCheckbox'

export default class Filter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            store: {}
        }
    }

    addToStore = async (key, value) => {
        if (this.state.store[key]) {
            this.state.store[key].push(value);
        }
        else {
            this.state.store[key] = [value];
        }
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
                    />
                    <FilterCheckbox 
                        title = "U/FOUO"
                    />
                    <FilterCheckbox 
                        title = "S"
                    />
                    <p className = 'filter-unit-title'>
                        Company
                    </p>
                    <FilterCheckbox 
                        title = "CSRA"
                    />
                    <FilterCheckbox 
                        title = "TBD"
                    />
                    <FilterCheckbox 
                        title = "CSRA, LLC"
                    />
                    <FilterCheckbox 
                        title = "DTSPO"
                    />
                    <FilterCheckbox 
                        title = "ITA"
                    />
                    <FilterCheckbox 
                        title = "Northrup Grumman"
                    />
                    <FilterCheckbox 
                        title = "Radiant Logic"
                    />
                    <FilterCheckbox 
                        title = "SEWP"
                    />
                    <FilterCheckbox 
                        title = "Tester Company"
                    />
                    <p className = 'filter-unit-title'>
                        Acquisition Type
                    </p>
                    <FilterCheckbox 
                        title = "Serivice"
                    />
                    <FilterCheckbox 
                        title = "Software"
                    />
                    <FilterCheckbox 
                        title = "Hardware"
                    />
                </div>
            </div>
        )
    }
}