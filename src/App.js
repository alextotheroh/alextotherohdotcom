import React, { Component } from 'react';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Bruno from './components/Bruno';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/bruno' component={Bruno} />
      </Switch>
    );
  }
}

export default App;
