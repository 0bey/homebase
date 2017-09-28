import React from 'react';

const Button = ({index, label, link, navigate}) => {
  return (
    <div
      onClick={(e) => navigate(link)}
      style={{...styles.base(index)}}
    >
     { label }
    </div>
  );
};

export default Button;

const styles = {
  base: (index) => {
    return {
      gridColumn: `${index + 1}`,
      cursor: 'pointer'
    };
  }
};
