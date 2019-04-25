import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomeContainer from './home/containers/homeContainer';
import LoginContainer from './public/login/containers/loginContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact path='/' to='/login' />
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/home' component={HomeContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
