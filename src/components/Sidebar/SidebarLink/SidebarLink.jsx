import React from 'react';
import { Link } from 'react-router-dom';

import Style from './SidebarLink.style.js';

const SidebarLink = (location) => ({ to, label }) =>
  <Link key={to} to={to} style={Style.root(location === to)}>
    { label }
  </Link>

export default SidebarLink
