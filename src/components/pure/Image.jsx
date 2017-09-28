import React from 'react';

const Image = ({src}) => {

  return <img
          src={src}
          alt={alt}
          style={styles.base}
         />;

};

export default Image;

const alt = 'Image';

const styles = {
  base: {
    maxHeight: '100%',
    maxWidth: '100%'
  }
};
