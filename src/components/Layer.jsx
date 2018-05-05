import React from 'react'

const Layer = ({ children }) => 
  <div style={style.container}>
    { children }
  </div>

export default Layer

const style = {
  container: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  }
}
