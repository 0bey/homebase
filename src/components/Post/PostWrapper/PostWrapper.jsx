import React from 'react'

import Style from './PostWrapper.style.js'

const PostWrapper = ({ children }) => 
  <div style={Style.root}>
    { children }
  </div>

export default PostWrapper