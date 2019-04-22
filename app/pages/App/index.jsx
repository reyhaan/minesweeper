import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/:uuid" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default App
