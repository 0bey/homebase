import React from 'react'
import { Link } from 'react-router-dom'
import Octocat from 'assets/mark-github.svg'

const Code = () => 
  <div style={styles.container}> 
    <a href="https://github.com/0bey/">
      <img alt="A link icon to github projects" src={Octocat} style={styles.icon} />
    </a>
    <div style={styles.blurb}>
      I have organized my ongoing and prior work on github, if you are interested in the full trajectory of my experience see my resume. 
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