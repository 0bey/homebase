import React from 'react'
import { Link } from 'react-router-dom'

import Hover from './Hover.jsx'

export default ({to, children}) =>
  <div style={styles.container}>
    <Hover>
      { isHovered => 
        <Link to={to} style={styles.dest}>
          <div style={styles.label(isHovered)}>
            { children }
          </div>
        </Link>
      }
    </Hover>
  </div>


const styles = {
  container: {
    position: 'relative'
  },
  dest: {
    display: 'block',
    fontWeight: 'bold',
    fontSize: '2vh',
    textDecoration: 'none',
    color: 'inherit',
    height: '100%',
    boxSizing: 'border-box',
    padding: '20% 25%',
  },
  label: (isHovered) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    border: 'solid 2px transparent',
    transition: 'border 0.5s ease-out',
    ...isHovered && {
      border: 'solid 2px black'
    }
  })
}