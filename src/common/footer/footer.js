import React from 'react';

import yacht_logo from '../../assets/logo.png'
import './styles.css';

function Footer() {
  return (
    <div className="footer">
      <img className="footer_image" src={yacht_logo} alt="Yacht" />
      <span>
        MostDev
        <small>{new Date().getFullYear()}</small>
      </span>
    </div>
  );
}

export default Footer;
