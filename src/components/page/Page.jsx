import React from 'react'

import Sidebar from 'components/Sidebar/Sidebar.jsx'
import Style from './Page.style.js'

const Page = ({ children, withSidebar }) =>
  <div style={Style.root}>
    { withSidebar && <Sidebar /> }
    <div style={Style.childRoot}>
      { children }
    </div>
  </div>

export default Page
