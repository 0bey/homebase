import React from 'react';
import { map } from 'lodash';

import { keys } from 'constants/Store.js';

import hydrate from 'components/hoc/hydrate.jsx';
import Page from './Page.jsx';
import Post from './Post.jsx';

const News = ({ data }) => {
  return (
    <Page withSidebar>
      { map(data, Post) }
    </Page>
  )
}

export default hydrate(keys.pages.news)(News);
