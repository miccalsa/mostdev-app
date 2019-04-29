import React from 'react';

import SSO from './sso';

import './login-layout.css';

const LoginLayout = (props) => {
  return (
    <React.Fragment>
      <div className="sso_container">
        <div className="row">
          <div className="col-md-8 sso_container-center">
            <div className="sso_container-welcome ">
              <h1>mostdev <br /> community</h1>
              <p>
                Most Dev by Yacht is a community for Software Developers. The 
                goal of the network is career acceleration and it offers 
                Software Engineers specialized in Back End, Front End and 
                Mobile Development challenging assignments, technical expertise 
                and personal development. Do you also want to speed up your 
                career as a developer?
              </p>
            </div>
          </div>
          <div className="col-md-4 sso_container-center sso_container-white">
            <SSO
              loginData={props.loginData} 
              ssoRequest={props.ssoRequest}
              ssoSuccess={props.ssoSuccess} 
              ssoFail={props.ssoFail} 
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginLayout;
