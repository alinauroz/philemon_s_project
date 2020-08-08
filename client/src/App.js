import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import Login from './components/Login'
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
  }

  render () {
    return (
      <>
        <SearchBar />
        <Login />
        <APR 
          data = {data1}
        />
        <APR 
          data = {data2}
        />
        <APR 
          data = {data2}
        />
      </>
    )
  }

}

export default App;
