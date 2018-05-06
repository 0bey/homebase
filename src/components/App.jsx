import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import NavButton from './NavButton.jsx'
import Emblem from 'components/Emblem.jsx'
import About from 'components/About.jsx'
import Code from 'components/Code.jsx'
import Art from 'components/Art.jsx'

const App = ({ children }) => 
  <HashRouter>
    <div style={styles.container}>
      <Switch>
        <Route path="/" exact component={Emblem} />
        <Route path="/about" component={About} />
        <Route path="/code" component={Code} />
        <Route path="/art" component={Art} />
      </Switch>
      <NavBar>
        <NavButton to="/about">
          about
        </NavButton>
        <NavButton to="/code">
          code
        </NavButton>
        <NavButton to="/art">
          art
        </NavButton>
      </NavBar>
    </div>
  </HashRouter>

export default App

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateRows: '1fr minmax(30vh, auto)',
    overflow: 'hidden'
  }
}