import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => (
  <>
    <h2 className="head-text">Take a coffee & chat with me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={images.email} alt="email" />
        <a href="mailto:se.yonatan.merkebu@gmail.com" className="p-text">
          se.yonatan.merkebu@gmail.com
        </a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href="tel:+251967657294" className="p-text">
          +251 967657294
        </a>
      </div>
    </div>
  </>
);

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
