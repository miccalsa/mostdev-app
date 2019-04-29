import React from 'react';
import { GoogleLogin } from 'react-google-login';

import './sso.css';
import yacht_logo from '../../../assets/logo.png';
import google_logo from '../../../assets/g-logo.png';

const SSO = (props) => {
  return (
    <div className="sso_container-login">
      <img src={yacht_logo} className="sso_container-img" alt="Yacht logo" />
      <p className="sso_container-description">Login to Your Account</p>
      <img src={google_logo} className="sso_container-logo" alt="Yacht logo" />
      <GoogleLogin
        render={renderProps => (
          <button 
            onClick={renderProps.onClick} 
            className="btn btn-primary sso_container_login-btn"
          >Login</button>
        )}
        clientId="310577854418-3nrped443as94c4ba914sc30si6ohnrd.apps.googleusercontent.com"
        onSuccess={props.ssoSuccess}
        onFailure={props.ssoFail}
        onRequest={props.ssoRequest}
        hostedDomain="yacht.nl"
        cookiePolicy={'single_host_origin'}
      />
      {props.loginData.status === 'error' && (
        <p className="sso_container_small-text text-danger">
          You must use a valid Yacht email to login
        </p>
      )}
      
      <p className="sso_container_small-text">
        Use your Yacht Google email to login
      </p>
    </div>
  );
}

export default SSO;
