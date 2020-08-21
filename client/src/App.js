import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import Login from './components/Login'
import Signup from './components/Signup'
import APR from './components/APR'
import UserBar from './components/Userbar'
import Filter from './components/Filter'
import FilterViewer from './components/FilterViewer'
import Form from './components/Form'

const API = /localhost/.test(window.location) ? "http://localhost:3002/" : ""

const data1 = {
  isArchived : true,
  DOCUMENT_CLASSIFICATION: "U",
  APR_REQ_NUM: '2010-16-ABC-09'
}

const data2 = {
  isArchived : false,
  DOCUMENT_CLASSIFICATION: "U/FOUO",
  APR_REQ_NUM: '2010-16-ABC-09'
}

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      view: "home",
      login_view: "su",
      APRs: [],
      filterList : ['Hello', 'World']
    }
  }

  updateFilterStore = async store => {
    let items = [];
    for (let item in store) {
      store[item].map(elem => {
        items.push(elem)
      });
    }
    await this.setState({filterList: items});
    console.log(this.state.filterList)
  }

  componentDidMount = async () => {
    try {
      let data = await fetch(API + 'APR');
      data = await data.json();
      this.setState({APRs : data});
    }
    catch (err) {
      console.error(err)
    }
  }

  search = async () => {
    try {

    }
    catch (err) {
      console.error(err)
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
          <div style={{display: this.state.mainView}}>
          <div>
            <div style = {{display: "inline-block", width: 250, height: 500, height: window.innerHeight - 120}} className = "filter-con">
              <div className = "filters">
                <Filter 
                  onFiltersUpdate = {this.updateFilterStore}
                />
              </div>
            </div>
            <div style={{display: "inline-block", verticalAlign: "top", maxWidth: window.innerWidth - 300}}>
              <FilterViewer 
                list = {this.state.filterList}
              />
              <APR 
                data = {data1}
              />
              {
                this.state.APRs.map(APR_ => {
                    return (
                      <APR
                        data = {APR_}
                      />
                    );
                })
              }
            </div>
          </div>
          </div>
          <div style={{display: this.state.newFormDisplay}}>
              <Form />
          </div>
        </div>
      </>
    )
  }

}

export default App;
