import React from 'react';

import SSO from '../SSO/sso';

import './layout.css';

function LoginLayout() {
    return (
        <React.Fragment>
            <div className="sso_container">
                <div className="row">
                    <div className="col-md-8 sso_container-center">
                        <div className="sso_container-welcome ">
                            <h1>mostdev <br /> community</h1>
                            <p>
                                MostDev is a Yacht community of developers ....
                                MostDev is a Yacht community of developers ....
                                MostDev is a Yacht community of developers ....
                                MostDev is a Yacht community of developers ....
                                MostDev is a Yacht community of developers ....
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 sso_container-center sso_container-white">
                        <SSO />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginLayout;
