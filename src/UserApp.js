import React, { Component } from 'react';
import './App.css';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Amplify from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { MainPage } from './pages/MainPage'

const UserApp = () => {

    return (
        <div>

            <Switch>
                <Route path="/user" exact render={() => <MainPage />}/>
                <Route path="/user/hello" exact render={() => <div>user hello</div>}/>
            </Switch>
        </div>
    );
}

export default withAuthenticator(UserApp);
