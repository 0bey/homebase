import React from 'react'

import NavBar from './NavBar.jsx'
import NavButton from './NavButton.jsx'
import Emblem from './Emblem.jsx'
 
const App = ({ children }) => 
  <div style={styles.container}>
    { children || <Emblem /> }
    <NavBar>
      <NavButton to="/about">
        about
      </NavButton>
      <NavButton to="/code">
        code
      </NavButton>
      <NavButton to="/art">
        art
      </NavButton>
    </NavBar>
  </div>

export default App

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateRows: '1fr minmax(30vh, auto)',
  }
}