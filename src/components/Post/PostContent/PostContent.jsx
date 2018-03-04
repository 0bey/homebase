import React from 'react'

import Style from './PostContent.style.js'

const PostContent = ({ content }) => 
  <div style={Style.root}>
    { content }
  </div>

export default PostContent