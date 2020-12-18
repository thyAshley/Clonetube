import React from 'react';

import './style.scss';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="navbar__container">
        <Navbar />
      </div>
      <div className="body">
        <Sidebar />
        <div className="videos__container"></div>
      </div>
    </div>
  );
};

export default HomePage;
