import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router-dom';
import Waves from 'assets/waves-small.gif';

const OceanEmblem = () => {
  return (
    <Link to="/news" style={styles.container}>
      <div style={[styles.layer, styles.centered]}> 
        <img src={Waves} alt="" style={styles.circular} />
      </div>
      <div style={[styles.layer, styles.centered]}>
        <div style={[styles.textBox, styles.medFont]}>
          mac finnie
        </div>
        <div style={[styles.textBox, styles.slantFont]}>
          @0bey
        </div>
      </div>
    </Link>
  )
}

export default Radium(OceanEmblem);

const styles = {
  container: {
    display: 'block',
    position: 'relative',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%'
  },
  layer: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circular: {
    borderRadius: '50%'
  },
  textBox: {
    letterSpacing: '5px',
    background: 'white',
    color: 'black'
  },
  medFont: {
    fontSize: '24px'
  },
  slantFont: {
    fontFamily: 'Orator Slanted'
  }
}