
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginComponent from "./components/LoginComponent";
import SigninComponent from "./components/SigninComponent";
import FeedComponent from "./components/FeedComponent";
import MyPageComponent from "./components/MyPageComponent";
import EditComponent from "./components/EditComponent";
import ArchiveComponent from "./components/ArchiveComponent";
import SavedComponent from "./components/SavedComponent";

class App extends Component {
  render(){
    return(
      <div>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginComponent}/>
                <Route path="/signin" component={SigninComponent}/>
                <Route path="/feed" component={FeedComponent}/>
                <Route path="/mypage" component={MyPageComponent}/>
                <Route path="/edit" component={EditComponent}/>
                <Route path="/archive" component={ArchiveComponent}/>
                <Route path="/saved" component={SavedComponent}/> 
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
