import React from 'react';

import Row from './Row.jsx';

/**
 * Menu:
 *  A configurable navigation component.
 *
 */
const Menu = ({seed, environment})  => {

  return <Row seed={seed} environment={environment} />;

};

export default Menu;
