import React from 'react';

import { spawn } from '../../utils/Utils.js';

/**
 * A HOMEBASE REALM
 */
const Realm = ({seed: {nodes}, ...environment}) => {
  return (
    <div style={styles.base}>
      { nodes.map((seed) => spawn(seed, environment)) }
    </div>
  );
};

export default Realm;

const styles = {
  base: {
    height: '100%',
    width: '100%'
  }
};
