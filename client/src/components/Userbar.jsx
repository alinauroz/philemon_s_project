import React from 'react'

export default class UserBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "Ali Nauroze",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuMj5Jt7LQ0OQSdpmi02mQyidiU5qLDV0o6g&usqp=CAU"
        }
    }
    render () {
        return (
            <div className='user-bar'>
                <div className = 'user-bar-logo'>
                    <h1 style={{margin:0}} >Logo</h1>
                </div>
                <div className='user-bar-right'>
                    <div className = 'menu-con'>
                        World
                    </div>
                    <div className = 'user-detail'>
                        <div style={{fontSize: 12, display: "inline-block", verticalAlign: "top", marginTop: 3, marginRight: 5}}>
                            {this.state.name}<br />
                            {
                                //onClick function removes token value from localStorage and reloaded the page
                            }
                            <span style={{cursor: "pointer"}} onClick = {() => {localStorage.setItem("token", ""); window.location.reload()}}>Logout</span>
                        </div>
                        <div style={{display: "inline-block", width:35, height: 35, borderRadius: 30, backgroundImage: `url(${this.state.img})`, backgroundSize: "cover"}}>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}