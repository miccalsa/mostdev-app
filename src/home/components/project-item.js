import React from 'react';
import { Link } from 'react-router-dom';

import './home-layout.css';

const ProjectItem = (props) => {
  return (
    <div className="ProjectBox_item">
      <span className="ProjectBox_item_title">{props.details.name}</span>
      <p className="ProjectBox_item_description">{props.details.description}</p>
      <div className="ProjectBox_item_overlay">
        <Link to={props.details.codeLink} className="ProjectBox_item_links">Code</Link>
        <Link to={props.details.wikiLink} className="ProjectBox_item_links">Wiki</Link>
        <Link to={props.details.demoLink} className="ProjectBox_item_links">Live Demo</Link>
      </div>
    </div>
  );
}

export default ProjectItem;
