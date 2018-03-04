import React from 'react'

import Style from './SidebarWrapper.style.js';

const SidebarWrapper = ({ children }) => 
  <div style={Style.root}>
    { children }
  </div>

export default SidebarWrapper