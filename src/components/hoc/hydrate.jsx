import React from 'react';
import { Store } from 'constants/Store.js';

const hydrate = (key) => (DryComponent) => (props) => {
	return (
		<DryComponent data={Store[key]} {...props} />
	)	
} 

export default hydrate;