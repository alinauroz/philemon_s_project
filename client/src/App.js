import React from 'react';
import logo from './logo.svg';
import './App.css';

import APR from './components/APR'

const data1 = {
  isArchived : true,
  classification: "U"
}

class App extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <>
        <APR 
          data = {data1}
        />
      </>
    )
  }

}

export default App;
