import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import News from './News/News.jsx'
import Landing from './Landing/Landing.jsx'

const App = () => 
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/news" component={News} />
    </Switch>
  </HashRouter>

export default App
