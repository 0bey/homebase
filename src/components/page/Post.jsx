import React, { Fragment } from 'react';

const Post = ({ label, date, content }) => 
  <Fragment key={date}>
    <div className="bullet">{ date }</div>
    <div className="label t-med t-slant">{ label }</div>
    <div className="content">{ content }</div>
  </Fragment>

export default Post
