import React, { Component } from 'react';

import ProjectList from '../components/project-list';
import Profile from '../components/profile';
import Footer from '../../../components/Footer/footer';

import './layout.css';

class HomeLayout extends Component {
    render () {
        return (
            <div className="home-layout">
                <div className="row">
                    <div className="col-md-8 home-layout_center">
                        <ProjectList />
                    </div>
                    <div className="col-md-4 home-layout_center">
                        <Profile />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>
      );
    }
}

export default HomeLayout;
