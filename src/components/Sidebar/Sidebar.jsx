import React from 'react';
import { withRouter } from 'react-router-dom';
import { map } from 'lodash';

import Store from 'constants/Store.js'

import SidebarLink from './SidebarLink/SidebarLink.jsx'
import SidebarWrapper from './SidebarWrapper/SidebarWrapper.jsx'

const Sidebar = ({location: { pathname }}) => 
  <SidebarWrapper>
    { map(Store.navigation, SidebarLink(pathname)) }
  </SidebarWrapper>
  
export default withRouter(Sidebar)
