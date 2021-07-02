import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Signin from './Signin.js';
import Signup from './Signup.js';
import Home from './Home.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

login = (token) => {
  this.setState({ token })
  localStorage.setItem('TOKEN', token)
}

  render() {
    return (
      <div className="Nav">
        <Router>
          <Header />
        </Router>
        <Switch>
        <Route 
            exact path='/' 
              render={(routerProps) => <Home
                login={this.login} 
                {...routerProps}/>} 
              />
        <Route 
          exact path='/signin' 
            render={(routerProps) => <Signin
              login={this.login} 
              {...routerProps}/>} 
            />
        <Route 
          exact path='/signup' 
            render={(routerProps) => <Signup
              login={this.login} 
              {...routerProps}/>} 
            />
        </Switch>
      </div>
    );
  }
}
