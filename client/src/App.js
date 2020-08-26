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

const view = localStorage.getItem("token") ? "home" : "login"

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
      view: view,
      login_view: "su",
      APRs: [],
      filterList : [],
      newFormView: "none"
    }
  }

  getAPRs = async store => {
    try {
      let d = await fetch(API + "APR/search?q=" + JSON.stringify(store));
      let APRs = await d.json();
      this.setState({APRs})
    }
    catch (err) {
      alert("Some error while gettings results")
    }
  }

  getById = async id => {
    try {
      let res = await fetch(API + 'APR/search?q={"APR_REQ_NUM": "'+id+'"}');
      let APRs = await res.json();
      this.setState({APRs});
    }
    catch (err) {
      alert('Error while fetching the APR')
    }
  }

  updateFilterStore = async store => {
    console.log(store)
    this.getAPRs(store)

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

  setNewForm = async () => {
    this.setState({
      newFormView: "block",
      mainView: "none"
    })
  }

  hideNewForm = async () => {
    this.setState({
      newFormView: "none",
      mainView: "block"
    })
  }

  uploadFile = async (e) => {
    let file = e.target.files[0];
    const fd = new FormData();
    fd.append('csv', file);
    console.log(file);
    // send `POST` request
    fetch('http://localhost:3002/APR/csv', {
        method: 'POST',
        body: fd
    })
    .then(res => res.json())
    .then(json => {
      if ('name' in json) {
        alert("Uploaded")
      }
      else {
        alert("Some error in uploading")
      }
    })
    .catch(err => alert(err));
  }

  render () {
    return (
      <>
        
        <div style={{textAlign: "center", display: this.state.view === "login" ? "block" : "none"}}>
          <br/>
          <center>
            <input type = 'button' value = 'Login' onClick = {() => this.setState({login_view: "li"})} />
            <input type = 'button' value = 'Sign Up' onClick = {() => this.setState({login_view: "su"})} />
          </center>
          {
            this.state.login_view == "li" ? <Login /> : <Signup />
          }
        </div>
        <div style={{display: this.state.view === "home" ? "block" : "none"}}>
          <UserBar />
          <SearchBar 
            formView = {this.setNewForm}
            formHide = {this.hideNewForm}
            getById = {this.getById}
          />
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
          <div style={{display: this.state.newFormView}}>
              <br />
              <input type = 'button' value = 'Back' onClick = {this.hideNewForm} />
              <input 
                type = 'file'
                onChange = {this.uploadFile}
              />
              <br />
              <Form />
          </div>
        </div>
      </>
    )
  }

}

export default App;
