import React from 'react'

const API = /localhost/.test(window.location) ? "http://localhost:3002/" : ""

export default class APR extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            detailView: "none",
            updateView: "none",
            commentBox: "none",
            updated: {}
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

    setUpdateFormValues = (e) => {
        let data = this.state.updated;
        data[e.target.name] = e.target.value;
        this.setState({updated: data})
    }


    getUpdateForm = () => {
        let a = []
        for (let x in this.props.data) {
            if (! this.state.firstTime) this.state.updated[x] = this.props.data[x];
            a.push( <><b>{x}:</b> <input type = 'text' onChange = {this.setUpdateFormValues} value = {this.state.updated[x]} name = {x} /><br/></> );
        }
        this.state.firstTime = true;
        return a;
    }

    update = async () => {
        try {
            alert("Updating ...");
            let d = await fetch (API + "APR/update", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.updated)
            });
            alert("Updated")
        }
        catch (err) {
            console.error(err);
            alert("Some error occurred. View console for more details")
        }
    }

    comment = async () => {
        alert("Commenting ..")
        let body = JSON.stringify({
            comment: this.state.comment,
            token: localStorage.getItem('token'),
            APR_NUM: '1010-Z'
        });
        let d = await fetch (API + "comment/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });
        alert("Comment Saved")
    }

    render () {
        return (
            <>
            <div className = 'apr-detail-container' style={{display: this.state.detailView}}>
                <input type = 'button' onClick = {() => {this.setState({detailView:"none"})}} value = 'Hide' />
                <div className = 'apr-detail'>
                    <input class = 'button'type = 'button' value = 'View Details' onClick = {() => {this.setState({detailsView_: "block", updateView: "none", commentBox: "none"})}} />
                    <input class = 'button' type = 'button' value = 'View Update Form' onClick = {() => {this.setState({detailsView_: "none", updateView: "block", commentBox: "none"})}} />
                    <input class = 'button' type = 'button' value = 'Comments' onClick = {() => {this.setState({detailsView_: "none", updateView: "none", commentBox: "block"})}} />
                    
                    <div style = {{display:this.state.detailsView_}}>
                    {
                        this.getDetails()
                    }
                    </div>
                    <div style = {{display:this.state.commentBox}}>
                    {
                        <textarea onChange = {(e) => {this.setState({comment: e.target.value})}} placeholder = 'Comment' style = {{width:"70%", margin: "10px 5px", padding: 10}}>{this.state.comment}</textarea>
                    }
                    <br />
                    <input type = 'button' value = 'Comment' className = 'save-apr-button' onClick = {this.comment}/>
                    </div>
                    <div style = {{display:this.state.updateView}}>
                    {
                        this.getUpdateForm()
                    }
                    <input type = 'button' value = 'Update' onClick = {this.update} className = "save-apr-button" />
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