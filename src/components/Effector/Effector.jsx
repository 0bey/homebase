import React from 'react'
import { Motion, spring } from 'react-motion'

const SOURCE = {value: 0}
const TARGET = {value: spring(80, {stiffness: 50, damping: 20})}

const Effector = ({attribute, children}) => 
  <Motion defaultStyle={SOURCE} style={TARGET}>
    { ({value}) => children({filter: `${attribute}(${value}%)`}) }
  </Motion>

export default Effector