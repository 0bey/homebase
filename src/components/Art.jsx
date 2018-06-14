import React from 'react'
import ArtProvider from './ArtProvider.jsx'

const ArtWaiter = () => 
  <div style={styles.frame}>
    loading
  </div>

const ArtWorks = ({files}) => files.map((src, index) => 
  <div key={`Artwork-${index}`} style={styles.frame}>
    <img alt={`artwork #${index}`} src={src} style={styles.artwork} />
  </div>
)

const Art = () => 
  <ArtProvider>
    { files => 
      <div style={styles.container}>
        <div style={styles.gallery}>
          { files.length 
              ? <ArtWorks files={files} />
              : <ArtWaiter />
          }
        </div>
      </div>
    }
  </ArtProvider>

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
