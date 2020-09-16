import React from 'react'

export default class extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

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
        })
        .catch(err => alert(err));
    }

    render () {
        return (
            <div style={{display: 'inline-block'}}>
            <div className = 'filter-con'>
            <div className = 'left-bar-con'>
                <div className = 'filter'>
                    <input 
                        type = 'file'
                        onChange = {this.uploadFile}
                    />
                </div>
            </div>
            </div>
            </div>
        )
    }
}