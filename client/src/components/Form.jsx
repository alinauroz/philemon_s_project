import React from 'react'

const {toProcessCase} = require("../utils/format");
const API = "http://localhost:3002/"
const toCollect = ["APR/REQ NUM","FY APR","APR Object ID","APR Create DT","APR Create Date","APR Released to Routing","Req OBJ ID","REQ Create DT","REQ Create Date","REQ Released to Route","INCOMING MIPR","SCRM ASRS Attached","Requisitioner","Requisitioner Email","Office","Phone","Required Delivery","Acquisition Method","Rec Award Action Type","PURPOSE REQ","Type of IT Acquisition","REQ INCLUDE ICS","Cleared Contractor","Product Desc","Sole Source","Vendor 1","Vedor 2","Vendor 3","Suggested Vendor","Auth AMT","System","Prod Cat","Serv Cat","How","Where","FILE1_NAME","FILE1_LINK","FILE2_NAME","FILE2_LINK","FILE3_NAME","FILE3_LINK","DOCUMENT_CLASSIFICATION","CAVEAT","TERMS","DECLASSIFY_EVENT","DECLASSIFY_DATE","DECLASSIFY_CODE","DECLASSIFIED_BY","SECURITY_METHOD","First IT Approval","Multiple Review","CONTRACT PIN","MOD NUM","OBLIG DATE","ISSUE DATE","AWARD VENDOR","Line Tot","Commit Amt","Obligated"]

export default class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            store: {}
        }
    }

    onChange_ = (e) => {
        let store = this.state.store;
        store[e.target.name] = e.target.value;
        this.setState({store});
    } 

    submit = async () => {
        try {
            alert("Saving ...")
            await fetch (API + "APR", {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(this.state.store)
            })
            alert("Saved")
        }
        catch (err) {
            alert("Some error")
        }
    }

    render () {
        return (
            <div className = 'container' style = {{width: 600, display: "inline-block"}}>
                <p style={{margin:10,fontWeight: 'bold'}}>Form</p>
                {
                    toCollect.map(field => {
                        return <input type = 'text' onChange = {this.onChange_} name = {toProcessCase(field)} placeholder = {field} className = 'form-input' />
                    })
                }
                <input type = 'text' onChange = {this.onChange_} name = "assigned-to" placeholder = "Assigned To" className = 'form-input' />
                <input type = 'button' value = 'Submit' onClick = {this.submit} className = "save-apr-button" />
            </div>
        )
    }
}