import React from 'react'
import { Link } from 'react-router-dom'

const NavButton = ({to, children}) =>
  <Link to={to} style={styles.dest}>
    {children}
  </Link>

export default NavButton

const styles = {
  dest: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '2vh',
    textDecoration: 'none',
    color: 'inherit'
  }
}