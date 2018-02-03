import React from 'react';

const PostGrid = ({ children }) => 
  <div style={styles.grid}>
    { children }
  </div>

export default PostGrid

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(128px, 256px) 1fr',
    gridTemplateRows: 'minmax(96px, 128px) minmax(128px, auto)',
  }
}