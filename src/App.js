import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App