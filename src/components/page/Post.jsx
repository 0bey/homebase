import React from 'react'
import Radium from 'radium'
import PostGrid from 'components/grids/PostGrid.jsx'
import { Colors } from 'constants/Colors.js'

const Post = ({ label, date, content }) => 
  <PostGrid>
    <div style={[styles.centered, styles.bullet]}>{ date }</div>
    <div className="label t-med t-slant">{ label }</div>
    <div className="content">{ content }</div>
  </PostGrid>

export default Radium(Post)

const styles = {
  centered: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bullet: {
    margin: '8px',
    // borderRadius: '50%',
    background: Colors.translucentSand
  }
}