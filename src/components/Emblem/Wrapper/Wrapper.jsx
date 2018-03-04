import React from 'react'
import { Link } from 'react-router-dom'

import Style from './Wrapper.style.js'

const Wrapper = ({ children }) =>
  <Link to="/news" style={Style.root}>
    { children }
  </Link>

export default Wrapper