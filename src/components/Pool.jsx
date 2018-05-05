import React from 'react'

import Waves from '../assets/Pool.gif'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
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

const Style = {
  root: {
    // borderRadius: '50%'
    maxHeight: '100%',
    maxWidth: '100%',
  }
}