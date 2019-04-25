import React from 'react';

import './sso.css';
import yacht_logo from '../../../assets/logo.png';
import google_logo from '../../../assets/g-logo.png';

const SSO = () => {
  return (
    <div className="sso_container-login">
      <img src={yacht_logo} className="sso_container-img" alt="Yacht logo" />
      <p className="sso_container-description">Login to Your Account</p>
      <img src={google_logo} className="sso_container-logo" alt="Yacht logo" />
      <button type="button" className="btn btn-primary sso_container_login-btn">
        Login
      </button>
      <p className="sso_container_small-text">
        Use your Yacht Google email to login
      </p>
    </div>
  );
}

export default SSO;
