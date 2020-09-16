import React from 'react'

export default class extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            duplicates: []
        }
    }

    uploadFile = async (e) => {
        let file = e.target.files[0];
        const fd = new FormData();
        fd.append('csv', file);
        // send `POST` request
        fetch('http://localhost:3002/APR/csv', {
            method: 'POST',
            body: fd
        })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          this.setState({
              name: file.name,
              duplicates: json.duplicates,
              total: 100
          })
        })
        .catch(err => alert(err));
    }

    render () {
        return (
            <div style={{display: 'inline-block', verticalAlign: 'top', height: "100%"}}>
                <div className = 'filter-con' style={{height: "100%"}}>
                    <div className = 'left-bar-con' style={{height: "100%"}}>
                        <div className = 'left-bar-top'>
                            Upload Cummulative APR Spreadsheet
                        </div>
                        <br />
                        <div className = 'filter'>
                            <input 
                                type = 'file'
                                onChange = {this.uploadFile}
                                className = 'app-blue-button'
                            />
                            {
                                this.state.total || true ? 
                                (
                                    <>
                                    <div style={{fontSize: 13, fontWeight: 'bold', wdith: "calc(100% - 20px)", marginLeft: 10}}>
                                        <p>
                                        Filename: <span style={{color: "#50c14a"}}>{this.state.name}</span> <br/>
                                        Duplicates: {this.state.duplicates ? this.state.duplicates.length: ""} <br />
                                        Ingested: {this.state.total - this.state.duplicates.length} of {this.state.total} ATRs <br />
                                        </p>
                                        <div className = 'app-blue-button' style={{width:"calc(100% - 20px)", margin: 0}}>
                                        Ingested {this.state.total - this.state.duplicates.length} of {this.state.total} ATRs
                                        </div>
                                    </div>
                                    <div style = {{height: "600px", marginTop: 10, marginLeft: 10, width:"calc(100% - 20px)"}}>
                                        
                                    </div>
                                    </>
                                ) : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}