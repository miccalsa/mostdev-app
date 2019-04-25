import React from 'react';

import yacht_logo from '../../assets/yacht-logo.png'
import './styles.css';

function Footer() {
  return (
    <div className="footer">
      <span>
        MostDev
        <small>{new Date().getFullYear()}</small>
      </span>
      <img className="footer_image" src={yacht_logo} alt="Yacht" />
      <span className="footer_questions">
        <a href="https://mostdev.io/faq" rel="noopener noreferrer" target="_blank">?</a>
      </span>
    </div>
  );
}

export default Footer;
