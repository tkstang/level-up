import React from 'react';
import './homeview.css';
import FooterLogin from './footer-login';

const Footer = () => (
  <div className="footer">
  || &emsp;&emsp;&emsp;
  <a href={'mailto:lvlupteam@lvlup.tech'}>Contact Us</a>
  &emsp;&emsp;&emsp;
  ||
  &emsp;&emsp;&nbsp;&nbsp;
  <FooterLogin />
  &nbsp;&nbsp;&emsp;&emsp;
  || &emsp;&emsp;&emsp;
  <a href="#">To the Top</a>
  &emsp;&emsp;&emsp;
  ||
  &emsp;&emsp;
  </div>
);

export default Footer;
