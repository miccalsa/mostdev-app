import React from 'react';

import ProjectList from './project-list';
import ProfileWidget from './profile-widget';
import Footer from '../../common/footer/footer';

import './home-layout.css';

const HomeLayout = (props) => {
  return (
    <div className="home-layout">
      <div className="project-section">
        <ProjectList projects={props.projects} />
      </div>
      <div className="profile-section">
        <ProfileWidget />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
