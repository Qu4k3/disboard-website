import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Wars } from './pages/Wars';
import { War } from './pages/War';
import { Players } from './pages/Players';
import { Player } from './pages/Player';
import { NotFound } from './pages/NotFound';
import { BackToTop } from './components/BackToTop';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about/" component={About}/>
          <Route exact path="/wars/" component={Wars}/>
          <Route path="/war/:warId" component={War}/>
          <Route exact path="/players/" component={Players}/>
          <Route path="/player/:playerId" component={Player}/>
          <Route component={NotFound} />
        </Switch>
        <BackToTop/>
      </div>
    );
  }
}

export default App;
