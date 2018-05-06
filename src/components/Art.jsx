import React from 'react'

const data = [
  'https://i.imgur.com/pMUGF0C.png',
  'https://i.imgur.com/bpqBPAr.png',
  'https://i.imgur.com/XaYbwgo.png',
  'https://i.imgur.com/3AHnfoz.png',
  'https://i.imgur.com/lyC9EuA.png',
  'https://i.imgur.com/cQ4RBoI.jpg',
  'https://i.imgur.com/J1GrJTY.png',
  'https://i.imgur.com/XS6SUQ4.png',
  'https://i.imgur.com/CT0xiQY.png',
  'https://i.imgur.com/ZI0NAwf.png',
  'https://i.imgur.com/ZHiOdVP.png',
  'https://i.imgur.com/F9l2M1Z.png',
  'https://i.imgur.com/dGotoh5.png',
  'https://i.imgur.com/22MfBYs.png',
  'https://i.imgur.com/OBW0ZkS.png',
  'https://i.imgur.com/4kA2pZB.png',
  'https://i.imgur.com/DImsRlw.jpg',
  'https://i.imgur.com/7djx3ih.png',
  'https://i.imgur.com/5jZJF49.png',
  'https://i.imgur.com/V1QIzrk.jpg',
]

const Art = () => 
  <div style={styles.container}>
    <div style={styles.gallery}>
      { data.map((datum, index) => 
          <div style={styles.frame}>
              <img alt={`artwork #${index}`} src={datum} style={styles.artwork} />
          </div>
      )}
    </div>
  </div>

export default Art

const styles = {
  container: {
    overflow: 'auto',
    height: '100%',
    width: '100vw',
    maxHeight: '100%',
  },
  gallery: {
    display: 'grid',
    gridAutoColumns: '100vw',
    gridTemplateColumns: 'repeat(20, 100vw)',
    gridTemplateRows: '100%',
    gridAutoFlow: 'row',
    boxSizing: 'border-box',
    gridAutoFlow: 'row',
    height: '100%',
  },
  frame: {
    height: '100%',
    width: '100%',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  artwork: {
    maxHeight: '100%',
    maxWidth: '100%',
  }
}
