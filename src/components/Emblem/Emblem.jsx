import React from 'react'
import { Motion, spring } from 'react-motion'

import Wrapper from './Wrapper/Wrapper.jsx'
import Layer from './Layer/Layer.jsx'
import Pool from './Pool/Pool.jsx'
import Title from './Title/Title.jsx'

const Emblem = () =>
  <Wrapper>
    <Motion 
      defaultStyle={{value: 0}} 
      style={{value: spring(80, {stiffness: 50, damping: 20})}}
    >
      { ({value}) => 
          <Layer>
            <Pool style={styles.lowerPool(value)} />
          </Layer>
      }
    </Motion>
    <Motion 
      defaultStyle={{
        top: 0,
        left: 0,
        invert: 0.5
      }} 
      style={{
        top: spring(2, {stiffness: 50, damping: 20}),
        left: spring(2, {stiffness: 50, damping: 20}),        
        invert: spring(1, {stiffness: 50, damping: 20})
      }}
    >
      { ({top, left, invert}) => 
          <Layer>
            <Pool style={styles.upperPool(top, left, invert)} />
          </Layer>
      }
    </Motion>
    <Layer>
      <Title />
    </Layer>
  </Wrapper>

export default Emblem

const styles = {
  lowerPool: value => ({
    filter: `opacity(${value})`,
  }),
  upperPool: (top, left, invert) => ({
    position: 'relative',
    top: `-${top}px`,
    left: `-${left}px`,
    filter: `invert(${invert}) opacity(50%)`,
  }),
}