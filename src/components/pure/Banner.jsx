import React from 'react';

import Store from '../../configuration/Store.js';
import Menu from '../pure/Menu.jsx';

const Title = () => <div style={styles.title}>homebase</div>;

const Banner = ({...environment}) => {
  return (
    <div style={styles.base} >
      <Title seed={Store.Title} />
      <Menu seed={Store.Navigation} environment={environment} />
    </div>
  );
};

export default Banner;

const styles = {
  base: {
    backgroundColor: 'white',
    boxShadow: '2px 2px 4px rgb(138, 136, 123)',
    padding: '16px',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: '3vmax',
    gridColumn: '1'
  }
}
