import React from 'react'
import { Link } from 'react-router-dom'
import Emblem from 'components/Emblem/Emblem.jsx'

const Navigation = ({children}) => 
  <div style={styles.nav}>
    {children}
  </div>

const Destination = ({to, children}) =>
  <Link to={to} style={styles.dest}>
    {children}
  </Link>

const Landing = () =>
  <div style={styles.container}>
    <Emblem />
    <Navigation>
      <Destination to="/about">
        about
      </Destination>
      <Destination to="/code">
        code
      </Destination>
      <Destination to="/art">
        art
      </Destination>
    </Navigation>
  </div>

export default Landing

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateRows: '1fr minmax(30vh, auto)',
  },
  nav: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, auto))'
  },
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