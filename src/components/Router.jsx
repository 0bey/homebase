import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from 'components/App.jsx'
import About from 'components/About.jsx'
import Code from 'components/Code.jsx'
import Art from 'components/Art.jsx'

const Router = () => 
  <HashRouter>
    <Switch>
      <Route path="/" exact component={App}>
        <Route path="/about" component={About} />
        <Route path="/code" component={Code} />
        <Route path="/art" component={Art} />
      </Route>
    </Switch>
  </HashRouter>

export default Router
