import React from 'react'
import { Motion, spring } from 'react-motion'

import Layer from './Layer.jsx'
import Title from './Title.jsx'
import SpiralGraphic from '../assets/graphic00003.png'
import Graphic from '../assets/graphic00013.png'

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
    backgroundImage: `url(${Graphic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  }
}