import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import News from './page/News.jsx';
import Landing from './page/Landing.jsx';

import 'styles/App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/news" component={News} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
