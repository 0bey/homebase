import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Link to="/news" className="landing page">
      <div className="t-med t-spaced">
        mac finnie
      </div>
      <div className="t-slant t-spaced">
        @0bey
      </div>
    </Link>
  )
}

export default Landing;
