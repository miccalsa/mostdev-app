import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, canAccess, ...rest }) => (
  <Route 
    {...rest}
    render={
      (props) => (
        sessionStorage.getItem('mostdev-user') ? 
          <Component {...props} /> :
          <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      )
    }
  />
);

export default AuthRoute;
