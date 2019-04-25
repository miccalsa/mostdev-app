import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AuthRoute from './common/protected/auth-route';
import HomeContainer from './home/containers/homeContainer';
import LoginContainer from './public/login/containers/loginContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact path='/' to='/login' />
          <Route exact path='/login' component={LoginContainer} />
          <AuthRoute path='/home' component={HomeContainer} canAccess={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
