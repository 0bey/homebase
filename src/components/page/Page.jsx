import React from 'react';

import Sidebar from './Sidebar.jsx';

const Page = ({ children, withSidebar }) => {
  return (
    <div className="flex">
      { withSidebar && <Sidebar /> }
      <div className="page">
        { children }
      </div>
    </div>
  )
}

export default Page;
