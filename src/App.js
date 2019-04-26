import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AuthRoute from './common/protected/auth-route';
import LoginContainer from './public/login/containers/loginContainer';
import HomeContainer from './home/containers/homeContainer';
import ProfileContainer from './profile/containers/profileContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact path='/' to='/login' />
          <Route exact path='/login' component={LoginContainer} />
          <AuthRoute exact path='/home' component={HomeContainer} canAccess={true} />
          <AuthRoute exact path='/home/profile' component={ProfileContainer} canAccess={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
