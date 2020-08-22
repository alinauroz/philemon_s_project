import React from 'react'

export default class APR extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className = 'container'>
                <div className = 'topbar-apr' style = { this.props.data.isArchived ?  {}  : {backgroundColor: "white"}}>
                    <span className = 'apr-classification-container'>{this.props.data.DOCUMENT_CLASSIFICATION}</span>
                    <span className = 'apr-no'>APR # - {this.props.data.APR_REQ_NUM}</span>
                </div>
                <div className = 'body-apr'>
                    <p>
                        <b>Released to routing: </b>{this.props.data.APR_RELEASED_TO_ROUTING} <br />
                    </p>
                    <p>
                        <b>Requisitioner: </b>{this.props.data.REQUISITIONER}
                    </p>
                    <p>
                        <b>Assigned To: </b> Tester 10 <br />
                    </p>
                    <p>
                        <b>Company: </b>Get Company from props
                    </p>
                    <p>
                        <b>IT acquisation type: </b> {this.props.data.REC_AWARD_ACTION_TYPE}
                    </p>
                    <p>
                        <b>Description: </b> {this.props.data.PRODUCT_DESC}
                    </p>
                </div>
            </div>
        )
    }

}