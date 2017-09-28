import React from 'react';
import ReactDOM from 'react-dom';
import Homebase from './components/stateful/Homebase.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homebase />, div);
});
