import React from 'react';

import yacht_logo from '../../images/yacht-logo.png'
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <span>MostDev</span>
            <img className="footer_image" src={yacht_logo} alt="Yacht" />
            <span className="footer_questions">?</span>
        </div>
    );
}

export default Footer;
