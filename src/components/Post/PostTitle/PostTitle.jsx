import React from 'react'

import Style from './PostTitle.style.js'

const PostTitle = ({ title }) => 
  <div style={Style.root}>
    { title }
  </div>

export default PostTitle