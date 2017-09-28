import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homebase from './components/stateful/Homebase.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homebase />, document.getElementById('root'));
registerServiceWorker();
