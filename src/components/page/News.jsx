import React from 'react';
import { map } from 'lodash';

import store from 'data/Store.js';
import withSidebar from 'components/hoc/withSidebar.jsx';

import Post from './Post.jsx';

const News = () => {
  return (
    <div className="news">
      { map(store.news, Post) }
    </div>
  )
}

export default withSidebar(News);
