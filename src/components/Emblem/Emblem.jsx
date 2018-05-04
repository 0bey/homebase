import React from 'react'
import { Motion, spring } from 'react-motion'

import Layer from './Layer/Layer.jsx'
import Title from './Title/Title.jsx'
import SpiralGraphic from './Pool/graphic00003.png'

const Emblem = () =>
  <div style={styles.wrapper}>
    <Motion 
      defaultStyle={{value: 0}} 
      style={{value: spring(1, {stiffness: 50, damping: 20})}}
    >
      { ({value}) => 
          <Layer>
            <div style={styles.graphic} />
          </Layer>
      }
    </Motion>
    <Layer>
      <Title />
    </Layer>
  </div>

export default Emblem

const styles = {
  wrapper: {
    position: 'relative',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
  },
  graphic: {
    backgroundImage: `url(${SpiralGraphic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  }
}