import React from 'react';
import './PageLoader.css';
import paper from '../assets/paper.png';

function PageLoader() {
  return (
    <div className="page-loader-container">
    <div className="paper-loader">
      <div className='paper'><img src={paper} alt="paper" /></div>
      <div className='paper'><img src={paper} alt="paper" /></div>
      <div className='paper'><img src={paper} alt="paper" /></div>
    </div>
    </div>
  );
}

export default PageLoader;
