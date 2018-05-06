import React from 'react'

const NavBar = ({children}) => 
  <div style={styles.nav}>
    {children}
  </div>

export default NavBar

const styles = {
  nav: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, auto))',
    width: '100vw'
  }
}