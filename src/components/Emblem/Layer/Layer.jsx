import React from 'react'
import Style from './Layer.style.js'

const Layer = ({ children }) => 
  <div style={Style.root}>
    { children }
  </div>

export default Layer
