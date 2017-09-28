import React, { Component } from 'react';

import Store from '../../configuration/Store.js';
import Keys from '../../configuration/Keys.js';

import Banner from '../pure/Banner.jsx';
import Realm from '../pure/Realm.jsx';

/**
 * Homebase root.
 *
 */
class Homebase extends Component {

  state = {
    currentRealm: Keys.RealmKeys.LANDING,
    revealMenu: true
  };

  handleMenuEnter = (e) => {
    this.setState({
      revealMenu: true
    });
  };

  handleMenuExit= (e) => {
    this.setState({
      revealMenu: false
    });
  };

  handleMenuClick = (link) => {
    this.setState({
      currentRealm: link
    });
  };

  render() {
    const { currentRealm } = this.state;
    const { Realms } = Store;

    return (
      <div style={styles.base}>
        <div style={styles.banner}>
          <Banner
            navigate={this.handleMenuClick}
            selected={currentRealm}
          />
        </div>
        <div style={styles.realm}>
          <Realm
            seed={Realms[currentRealm]}
          />
        </div>
      </div>
    );
  }
}

export default Homebase;

/* * * * * * s * t * y * l * e * s * * * * * * */

const styles = {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
    gridGap: '10px',

    backgroundColor: 'white'
  },
  banner: {
    gridColumn: 'span 8',
    gridRow: '1'
  },
  realm: {
    gridColumn: 'span 8',
    gridRow: '2 / 8'
  }
}
