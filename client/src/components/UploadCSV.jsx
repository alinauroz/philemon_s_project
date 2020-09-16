import React from 'react'

export default class extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            duplicates: [],
            ingested: []
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
          this.setState({
              name: file.name,
              duplicates: json.duplicates,
              total: json.total,
              ingested: json.ingested
          })
        })
        .catch(err => alert(err));
    }

    renderDuplicate () {
        let i = 0;
        let els = []
        this.state.ingested.map(dup => {
            if (i++ % 2 == 0) {
                els.push(<p style = {{margin: 0,backgroundColor: '#f2f2f2', padding: 10, width: 'calc(100% - 20px)'}}>{dup}</p>);
            }
            else {
                els.push(<p style = {{margin:0,padding: 10, width: 'calc(100% - 20px)'}}>{dup}</p>);
            }
        });
        return els;
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
                                this.state.total ? 
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
                                    <div style = {{fontSize: 13, height: "600px", marginTop: 10, marginLeft: 0, width:"calc(100% - 0px)"}}>
                                        <p style = {{marginLeft: 10}}>Successfully Uploaded</p>
                                        {
                                            this.renderDuplicate()
                                        }
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