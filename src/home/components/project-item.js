import React from 'react';

import './home-layout.css';

const ProjectItem = (props) => {
  return (
    <div className="ProjectBox_item">
      <span className="ProjectBox_item_title">{props.details.name}</span>
      <p className="ProjectBox_item_description">{props.details.description}</p>
      <div className="ProjectBox_item_overlay">
        <a href={props.details.codeLink} target="_blank" rel="noopener noreferrer" className="ProjectBox_item_links">Code</a>
        <a href={props.details.wikiLink} target="_blank" rel="noopener noreferrer" className="ProjectBox_item_links">Wiki</a>
        <a href={props.details.demoLink} target="_blank" rel="noopener noreferrer" className="ProjectBox_item_links">Live Demo</a>
      </div>
    </div>
  );
}

export default ProjectItem;
