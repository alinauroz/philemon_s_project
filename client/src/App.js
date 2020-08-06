import React from 'react';
import logo from './logo.svg';
import './App.css';

import APR from './components/APR'

class App extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <>
        <APR />
      </>
    )
  }

}

export default App;
