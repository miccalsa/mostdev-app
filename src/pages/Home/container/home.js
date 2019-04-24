import React, { Component } from 'react';

import ProjectList from '../components/project-list';
import Profile from '../components/profile';
import Footer from '../../../components/Footer/footer';

import './layout.css';

class HomeLayout extends Component {
    render() {
        return (
            <div className="home-layout">
                <div className="project-section">
                    <ProjectList />
                </div>
                <div className="profile-section">
                    <Profile />
                </div>
                <div className="footer-section">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default HomeLayout;
