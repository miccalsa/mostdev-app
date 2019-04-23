import React from 'react';

import './styles.css';

function Profile() {
    return (
        <div className="ProfileBox">
            <div className="ProfileBox-picture">
                <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="Profile pic" />
            </div>
            <div className="ProfileBox-details">
                <span className="ProfileBox-details-name">John Smith</span>
                <span className="ProfileBox-details-role">Front-end Developer</span>
            </div>
            <div className="ProfileBox-about">
                <h6>About</h6>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                    sit amet consectetur.
                </p>
            </div>
            <div className="ProfileBox-social-media">
                <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://facebool.com" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-google"></i>
                </a>
                <a href="https://github.com" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="ProfileBox-view-more">
                <span className="ProfileBox-view-more-btn">
                    View Details
                </span>
            </div>
            
        </div>
    );
}

export default Profile;
