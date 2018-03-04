import React from 'react'

import Style from './PostDate.style.js'

const PostDate = ({ date }) => 
  <div style={Style.root}>
    { date }
  </div>

export default PostDate