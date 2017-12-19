import React from 'react';

const Post = ({ label, content }) => {
  return (
    <div className="item">
      <div className="t-med t-slant">{ label }</div>
      <div>{ content }</div>
    </div>
  )
}

export default Post;
