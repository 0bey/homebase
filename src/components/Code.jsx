import React from 'react'
import Octocat from 'assets/mark-github.svg'

const Code = () => 
  <div style={styles.container}> 
    <a href="https://github.com/0bey/">
      <img alt="A link icon to github projects" src={Octocat} style={styles.icon} />
    </a>
    <div style={styles.blurb}>
      I have organized my ongoing and prior work on github. If you are interested in a more formal trajectory of my experience, please see my <a href="https://www.dropbox.com/s/228gsvrpdgvrbv8/GMF_RESUME.pdf?dl=0">resume</a>.
    </div>
  </div>

export default Code

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '8px',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  icon: {
    height: '12vw',
    width: '12vw'
  },
  blurb: {
    marginTop: '10px',
    maxWidth: '500px'    
  }
}