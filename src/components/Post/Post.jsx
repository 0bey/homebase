import React from 'react'
import Radium from 'radium'

import PostWrapper from './PostWrapper/PostWrapper.jsx'
import PostDate from './PostDate/PostDate.jsx'
import PostTitle from './PostTitle/PostTitle.jsx'
import PostContent from './PostContent/PostContent.jsx'

const Post = ({ label, date, content }) => 
  <PostWrapper>
    <PostDate date={date} />
    <PostTitle title={label} />
    <PostContent content={content} />
  </PostWrapper>

export default Radium(Post)
