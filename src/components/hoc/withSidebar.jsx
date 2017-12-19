import React from 'react';
import { withRouter } from 'react-router-dom';

import Sidebar from 'components/page/Sidebar.jsx';
import Page from 'components/page/Page.jsx';

const withSidebar = (Component) => (
  withRouter((props) =>
    <Page>
      <Sidebar {...props} />
      <Component {...props} />
    </Page>
  )
)

export default withSidebar;
