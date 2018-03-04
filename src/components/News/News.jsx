import React from 'react'
import { map } from 'lodash'

import Store from 'constants/Store'
import Page from 'components/Page/Page.jsx'
import Post from 'components/Post/Post.jsx'

const News = () =>
  <Page withSidebar>
    { map(Store.news, (datum, key) => <Post key={key} {...datum} />) }
  </Page>

export default News
