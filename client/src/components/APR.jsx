import React from 'react'

export default class APR extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            detailView: "none",
            updateView: "none"
        }
    }

    onClick_ = async () => {
        this.setState({detailView: "block"})
    }

    getDetails = () => {
        let a = []
        for (let x in this.props.data) {
            a.push( <p><b>{x}</b>: {this.props.data[x]}</p>);
        }
        return a;
    }

    getUpdateForm = () => {
        let a = []
        for (let x in this.props.data) {
            a.push( <><b>{x}:</b> <input type = 'text' value = {this.props.data[x]} name = {x} /><br/></> );
        }
        return a;
    }

    render () {
        return (
            <>
            <div className = 'apr-detail-container' style={{display: this.state.detailView}}>
                <input type = 'button' onClick = {() => {this.setState({detailView:"none"})}} value = 'Hide' />
                <div className = 'apr-detail'>
                    <input type = 'button' value = 'View Details' onClick = {() => {this.setState({detailsView_: "block", updateView: "none"})}} />
                    <input type = 'button' value = 'View Update Form' onClick = {() => {this.setState({detailsView_: "none", updateView: "block"})}} />
                    <div style = {{display:this.state.detailsView_}}>
                    {
                        this.getDetails()
                    }
                    </div>
                    <div style = {{display:this.state.updateView}}>
                    {
                        this.getUpdateForm()
                    }
                    </div>
                </div>
            </div>
            <div className = 'container' onClick = {this.onClick_}>
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
            </>
        )
    }

}