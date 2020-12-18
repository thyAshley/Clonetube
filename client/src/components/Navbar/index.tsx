import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RecorderIcon from '@material-ui/icons/Reorder';

import './navbar.scss';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="left">
        <button id="sidebar__toggle">
          <RecorderIcon className="icon" />
        </button>
        <YouTubeIcon className="icon youtube" />
        <h1>CloneTube</h1>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
  );
};

export default Navbar;
