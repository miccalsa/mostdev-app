import React from 'react';
import { Link } from 'react-router-dom';

import './home-layout.css';

const ProjectList = () => {
  return (
    <div className="ProjectBox">
      <div className="ProjectBox_item">
        <span className="ProjectBox_item_title">Project</span>
        <p className="ProjectBox_item_description">
          Lorem ipsum dolor sit amet consectetur,
          lorem ipsum dolor sit amet consectetur,
          lorem ipsum dolor sit amet consectetur
        </p>
        <div className="ProjectBox_item_overlay">
          <Link to="http:www.google.com" className="ProjectBox_item_links">Sources</Link>
          <Link to="http:www.google.com" className="ProjectBox_item_links">Wiki</Link>
          <Link to="http:www.google.com" className="ProjectBox_item_links">Live Demo</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
