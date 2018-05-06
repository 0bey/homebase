import React from 'react'

const About = () => 
  <div style={styles.container}>
    <div style={styles.blurb}>
      I am an engineer from Grand Rapids, Michigan. I see beautiful code as a rediscovery of nature's own elegant solutions. Because of this, I am deeply interested in problems from all sciences, in the mathematics which bind them together, and in the applications which express their power.
    </div>
  </div>

export default About

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  blurb: {
    maxWidth: '500px'
  }
}