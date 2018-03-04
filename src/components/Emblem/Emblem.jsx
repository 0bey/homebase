import React from 'react'
import Radium from 'radium'

import Wrapper from './Wrapper/Wrapper.jsx'
import Layer from './Layer/Layer.jsx'
import Pool from './Pool/Pool.jsx'
import Title from './Title/Title.jsx'

const Emblem = () =>
  <Wrapper>
    <Layer>
      <Pool />
    </Layer>
    <Layer>
      <Title />
    </Layer>
  </Wrapper>

export default Radium(Emblem)