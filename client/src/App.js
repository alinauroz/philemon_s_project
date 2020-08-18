import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import Login from './components/Login'
import Signup from './components/Signup'
import APR from './components/APR'
import UserBar from './components/Userbar'

const data1 = {
  isArchived : true,
  classification: "U",
  no: '2010-16-ABC-09'
}

const data2 = {
  isArchived : false,
  classification: "U/FOUO",
  no: '2010-16-ABC-09'
}

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      view: "home",
      login_view: "su",
    }
  }

  render () {
    return (
      <>
        
        <div style={{textAlign: "center", display: this.state.view === "login" ? "block" : "none"}}>
          {
            this.state.login_view == "li" ? <Login /> : <Signup />
          }
        </div>
        <div style={{display: this.state.view === "home" ? "block" : "none"}}>
          <UserBar />
          <SearchBar />
          <div>
            <div style = {{display: "inline-block", width: 250, height: 500, background: "grey", height: window.innerHeight - 120}} className = "filter-con">

            </div>
            <div style={{display: "inline-block", verticalAlign: "top", maxWidth: window.innerWidth - 300}}>
              <APR 
                data = {data1}
              />
              <APR 
                data = {data2}
              />
              <APR 
                data = {data2}
              />
              <APR 
                data = {data1}
              />
              <APR 
                data = {data2}
              />
              <APR 
                data = {data2}
              />
              <APR 
                data = {data1}
              />
              <APR 
                data = {data2}
              />
              <APR 
                data = {data2}
              />
              <APR 
                data = {data1}
              />
              <APR 
                data = {data2}
              />
              <APR 
                data = {data2}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default App;
