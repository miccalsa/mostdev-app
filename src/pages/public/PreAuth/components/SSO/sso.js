import React from 'react';
import { Link } from 'react-router-dom';

import './sso.css';
import yacht_logo from '../../../../../images/logo.png';
import google_logo from '../../../../../images/g-logo.png';

function SSO() {

    return (
        <div className="sso_container-login">
            <img src={yacht_logo} className="sso_container-img" alt="Yacht logo" />
            <p className="sso_container-description">Login to Your Account</p>
            <img src={google_logo} className="sso_container-logo" alt="Yacht logo" />
            <Link to='/home' className="btn btn-primary sso_container_login-btn">
                Login
            </Link>
            <p className="sso_container_small-text">
                Use your Yacht Google email to login
            </p>
        </div>
    );
}

export default SSO;
