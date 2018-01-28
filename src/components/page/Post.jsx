import React from 'react';

const Post = ({ label, date, content }) => {
  return (
    <div key={label} className="post">
      <div className="bullet">{ date }</div>
      <div className="label t-med t-slant">{ label }</div>
      <div className="content">{ content }</div>
    </div>
  )
}

export default Post;
