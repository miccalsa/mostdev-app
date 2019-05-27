import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import './home-layout.css';

const ProfileWidget = (props) => {
  const { user, profile } = props;

  return (
    <div className="ProfileBox">
      <div className="ProfileBox-picture">
        <img src={`${user.profilePic}?sz=300`} alt="Profile pic" />
      </div>
      <div className="ProfileBox-details">
        <span className="ProfileBox-details-name">{user.name}</span>
        <span className="ProfileBox-details-role">{profile.role || 'Professional at Yacht'}</span>
        <span className="ProfileBox-details-email">{user.email}</span>
        <div className="ProfileBox-details-section">
          <GoogleLogout
            render={renderProps => (
              <button type="button" onClick={renderProps.onClick}  className="ProfileBox-details-logout">
                <i className="fas fa-power-off"></i>
                Logout
              </button> 
            )}
            clientId="310577854418-3nrped443as94c4ba914sc30si6ohnrd.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={props.ssoLogout}
          />
        </div>
      </div>
      <div className="ProfileBox-about">
        <h6>About</h6>
        <p>{profile.description || 'Add something about you'}</p>
      </div>
      <div className="ProfileBox-social-media">
        <a href="https://www.linkedin.com" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.github.com" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.twitter.com" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        {/* {
          profile.social && profile.social.map((media, index) => {
            const iconClass = `fab fa-${media.type}`;
            return (
              <Link key={index} to={media.url} rel="noopener noreferrer" target="_blank">
                <i className={iconClass}></i>
              </Link>
            );
          })
        } */}
      </div>
      <div className="ProfileBox-view-more">
        <Link to='/home/profile' className="ProfileBox-view-more-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProfileWidget;
