import React from 'react';

import OceanEmblem from 'components/common/OceanEmblem.jsx';

const Landing = () => {
  return (
    <div style={styles.container}>
      <OceanEmblem />
    </div>
  )
}

export default Landing;

const styles = {
  container: {
    height: '100vh',
    width: '100vw'
  }
}