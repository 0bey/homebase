import React from 'react'

import Waves from './Pool.gif'
import Style from './Pool.style.js'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
const Pool = ({ style }) => {
  return (
    <img 
      src={Waves} 
      alt="" 
      style={{...Style.root, ...style}} 
    />
  )
}

export default Pool