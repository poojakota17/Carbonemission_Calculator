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
import { MainPage } from './pages/MainPage';
import { SettingsPage } from './pages/SettingsPage';
import { PostPage } from './pages/PostPage';

const UserApp = () => {

    return (
        <div>
            <Switch>
                <Route path="/user" exact render={() => <MainPage />}/>
                <Route path="/user/hello" exact render={() => <div>user hello</div>}/>
                <Route path="/user/settings" exact render={() => <SettingsPage />}/>
                <Route path="/user/postpage" exact render={() => <PostPage />}/>
            </Switch>
        </div>
    );
}

export default withAuthenticator(UserApp);
