import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomeLayout from './pages/Home/container/home';
import SSO from './pages/public/PreAuth/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={SSO} />
          <Route exact path='/home' component={HomeLayout} />
          <Redirect exact path='/' to='/login' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
