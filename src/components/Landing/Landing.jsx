import React from 'react'

import Emblem from 'components/Emblem/Emblem.jsx'

const Landing = () =>
  <div style={styles.container}>
    <Emblem />
  </div>

export default Landing

const styles = {
  container: {
    height: '100vh',
    width: '100vw'
  }
}