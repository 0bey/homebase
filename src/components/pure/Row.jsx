import React from 'react';

import { spawn } from '../../utils/Utils.js';

const Row = ({seed, environment}) => {
  environment.styles = styles.cell;

  return (
    <div style={styles.base(seed.nodes.length)}>

      { seed.nodes.map((node) => spawn(node, environment)) }

    </div>
  );
};

export default Row;

const styles = {
  base: (length) => {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${length}, 1fr)`,
      gridGap: '10px'
    };
  },
  cell: ({index}) => {
    return {
      gridColumn: `${index}`
    }
  }
};
