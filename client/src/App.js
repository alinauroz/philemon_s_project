import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import Login from './components/Login'
import Signup from './components/Signup'
import APR from './components/APR'

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
      view: "home"
    }
  }

  render () {
    return (
      <>
        
        <div style={{textAlign: "center", display: this.state.view == "login" ? "block" : "none"}}>
          <Signup />
          <Login />
        </div>
        <div style={{display: this.state.view == "home" ? "block" : "none"}}>
          <SearchBar />
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
      </>
    )
  }

}

export default App;
