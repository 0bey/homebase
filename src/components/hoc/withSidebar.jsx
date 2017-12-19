import React from 'react';
import { withRouter } from 'react-router-dom';

import Sidebar from 'components/Sidebar.jsx';
import Page from 'components/Page.jsx';

const withSidebar = (Component) => (
  withRouter((props) =>
    <Page>
      <Sidebar {...props} />
      <Component {...props} />
    </Page>
  )
)

export default withSidebar;
