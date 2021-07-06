import React, { Component } from 'react';
import './App.css';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import AboutUs from './components/AboutUs.js';
import Home from './components/Home.js';
import Trivia from './components/Trivia.js';
import ZombiePath from '../src/zombie/ZombiePath.js';
import Z1 from '../src/zombie/Z1.js';
import Z2 from '../src/zombie/Z2.js';
import Z3 from '../src/zombie/Z3.js';
import Z4 from '../src/zombie/Z4.js';
import Z5 from '../src/zombie/Z5.js';
import Z6 from '../src/zombie/Z6.js';
import Z7 from '../src/zombie/Z7.js';
import Z8 from '../src/zombie/Z8.js';
import Z9 from '../src/zombie/Z9.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
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
          <header>
                    <h1>Triforce of Trivia</h1>
                    <Link to="/">Home</Link>
          </header> 
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
          <Route 
            exact path='/about'               
            render={(routerProps) => <AboutUs
              login={this.login} 
              {...routerProps}/>} 
              />
          <Route 
            exact path='/trivia' 
            render={(routerProps) => <Trivia
              login={this.login} 
              {...routerProps}/>} 
              />
          <Route 
          exact path='/z' 
            render={(routerProps) => <ZombiePath
              login={this.login} 
              {...routerProps}/>} 
            />
          <Route 
          exact path='/z1' 
            render={(routerProps) => <Z1
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z2' 
            render={(routerProps) => <Z2
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z3' 
            render={(routerProps) => <Z3
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z4' 
            render={(routerProps) => <Z4
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z5' 
            render={(routerProps) => <Z5
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z6' 
            render={(routerProps) => <Z6
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z7' 
            render={(routerProps) => <Z7
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z8' 
            render={(routerProps) => <Z8
              login={this.login} 
              {...routerProps}/>} 
            />
            <Route 
          exact path='/z9' 
            render={(routerProps) => <Z9
              login={this.login} 
              {...routerProps}/>} 
            />
          </Switch>

          <footer>
            <Link to="/about">About Us</Link> 
          </footer>

        </Router>
      </div>
    );
  }
}
