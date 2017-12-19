import React from 'react';
import { map } from 'lodash';

import withSidebar from 'components/hoc/withSidebar.jsx';

const config = {
  cornerstone: {
    label: 'Launch // 12.18.2017',
    content: 'This site departed earth.'
  }
}

const News = () => {
  return (
    <div className="news">
      {map(config, ({label, content}) => (
        <div className="item">
          <div className="t-med t-slant">{ label }</div>
          <div>{ content }</div>
        </div>
      ))}
    </div>
  )
}

export default withSidebar(News);
