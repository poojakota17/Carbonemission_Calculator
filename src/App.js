import React, { Component } from 'react';
import './App.css';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import UserApp from './UserApp'
import { WelcomePage } from './pages/WelcomePage';
import { AboutPage } from './pages/AboutPage';
import { StaticPage } from './pages/StaticPage';

console.log("Start of APP");

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about" exact render={() => <AboutPage />}/>
                <Route path="/" exact render={() => <WelcomePage />}/>
                <Route path="/user" render={() => <UserApp />}/>
                <Route path="/static" exact render={() => <StaticPage />}/>
            </Switch>
        </Router>
    );
}

export default App;
  