import React from 'react';
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/MyoniM" target="_blank" rel="noreferrer">
      <div style={{ backgroundColor: 'rgb(49, 59, 172)' }}>
        <BsGithub style={{ color: 'white' }} />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/yonatan-merkebu-16a633182" target="_blank" rel="noreferrer">
      <div style={{ backgroundColor: 'rgb(49, 59, 172)' }}>
        <BsLinkedin style={{ color: 'white' }} />
      </div>
    </a>
    <a href="https://yonatan-merkebu.medium.com/" target="_blank" rel="noreferrer">
      <div style={{ backgroundColor: 'rgb(49, 59, 172)' }}>
        <BsMedium style={{ color: 'white' }} />
      </div>
    </a>
  </div>
);

export default SocialMedia;
