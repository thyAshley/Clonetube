import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RecorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/AddBox';

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
      <div className="center">
        <input className="searchbar" placeholder="Search" />
        <button className="searchbar-button">
          <SearchIcon className="icon search" />
        </button>
      </div>
      <div className="right">
        <button className="addvideo-button">
          <AddIcon className="icon add" />
        </button>
        <button className="profile"></button>
      </div>
    </div>
  );
};

export default Navbar;
