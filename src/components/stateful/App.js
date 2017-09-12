import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <Banner />
      </div>
    );
  }
}

const Banner = () => {
  return (
    <div style={styles.banner} >
      <div style={styles.title}>
        H O M E B A S E
      </div>
    </div>
  );
};

export default App;

/* * * * * * s * t * y * l * e * s * * * * * * */

const styles = {
  layout: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(8, auto)',
    gridTemplateRows: 'repeat(8, auto)',
    backgroundColor: 'white'
  },
  banner: {
    gridRow: '1',
    gridColumn: '1 / span 8',
    backgroundColor: 'white',
    boxShadow: '2px 2px 4px rgb(138, 136, 123)',
    padding: '16px',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: '3vmax'
  }
}
