import React from 'react'

const toCollect = ["APR/REQ NUM","FY APR","APR Object ID","APR Create DT","APR Create Date","APR Released to Routing","Req OBJ ID","REQ Create DT","REQ Create Date","REQ Released to Route","INCOMING MIPR","SCRM ASRS Attached","Requisitioner","Requisitioner Email","Office","Phone","Required Delivery","Acquisition Method","Rec Award Action Type","PURPOSE REQ","Type of IT Acquisition","REQ INCLUDE ICS","Cleared Contractor","Product Desc","Sole Source","Vendor 1","Vedor 2","Vendor 3","Suggested Vendor","Auth AMT","System","Prod Cat","Serv Cat","How","Where","FILE1_NAME","FILE1_LINK","FILE2_NAME","FILE2_LINK","FILE3_NAME","FILE3_LINK","DOCUMENT_CLASSIFICATION","CAVEAT","TERMS","DECLASSIFY_EVENT","DECLASSIFY_DATE","DECLASSIFY_CODE","DECLASSIFIED_BY","SECURITY_METHOD","First IT Approval","Multiple Review","CONTRACT PIN","MOD NUM","OBLIG DATE","ISSUE DATE","AWARD VENDOR","Line Tot","Commit Amt","Obligated"]

export default class Form extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className = 'container'>
                <p>Form</p>
                {
                    toCollect.map(field => {
                        return <input type = 'text' name = {field} placeholder = {field} className = 'form-input' />
                    })
                }
            </div>
        )
    }
}