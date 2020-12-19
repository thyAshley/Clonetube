import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RecorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/AddBox';

import './navbar.scss';

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

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
        <button className="btn searchbar-button">
          <SearchIcon className="icon search" />
        </button>
      </div>
      <div className="right">
        <button className="btn addvideo">
          <AddIcon className="icon add" />
        </button>
        {loggedIn ? (
          <button className="btn profile"></button>
        ) : (
          <Link to="/signin">
            <button className="btn signin">Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
