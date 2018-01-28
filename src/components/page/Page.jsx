import React from 'react';

import Sidebar from './Sidebar.jsx';

const Page = ({ children, withSidebar }) => {
  return (
    <div className="page">
      { withSidebar && <Sidebar /> }
      { children }
    </div>
  )
}

export default Page;
