import React from 'react';

import { Link } from 'react-router-dom';

import './home-layout.css';

const ProfileWidget = (props) => {
  const user = props.profile;

  return (
    <div className="ProfileBox">
      <div className="ProfileBox-picture">
        <img src={user.picture} alt="Profile pic" />
      </div>
      <div className="ProfileBox-details">
        <span className="ProfileBox-details-name">{user.name}</span>
        <span className="ProfileBox-details-role">{user.role}</span>
        <Link to="/login" className="ProfileBox-details-logout">
          <i className="fas fa-power-off"></i>
          Logout
        </Link>
      </div>
      <div className="ProfileBox-about">
        <h6>About</h6>
        <p>{user.description}</p>
      </div>
      <div className="ProfileBox-social-media">
        {
          user.social && user.social.map((media, index) => {
            const iconClass = `fab fa-${media.type}`;
            return (
              <Link key={index} to={media.url} rel="noopener noreferrer" target="_blank">
                <i className={iconClass}></i>
              </Link>
            );
          })
        }
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
