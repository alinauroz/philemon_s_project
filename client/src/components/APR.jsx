import React from 'react'

export default class APR extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className = 'container'>
                <div className = 'topbar-apr' style = { this.props.data.isArchived ?  {}  : {backgroundColor: "white"}}>
                    <span className = 'apr-classification-container'>{this.props.data.classification}</span>
                    <span className = 'apr-no'>APR # - {this.props.data.no}</span>
                </div>
                <div className = 'body-apr'>
                    <p>
                        <b>Released to routing: </b>2016-10-12 <br />
                    </p>
                    <p>
                        <b>Requisitioner: </b>Kent, Clark
                    </p>
                    <p>
                        <b>Assigned To: </b> Tester 10 <br />
                    </p>
                    <p>
                        <b>Company: </b>Get Company from props
                    </p>
                    <p>
                        <b>IT acquisation type: </b> Service
                    </p>
                    <p>
                        <b>Description: </b> Applications Sustainment
                    </p>
                </div>
            </div>
        )
    }

}