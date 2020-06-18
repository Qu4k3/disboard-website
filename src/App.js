import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Wars } from './pages/Wars';
import { War } from './pages/War';
import { Players } from './pages/Players';
import { Player } from './pages/Player';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';
import { BackToTop } from './components/BackToTop';

import Footer from './components/Footer';
import Header from './components/Header';

import 'normalize.css';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <main id="main" className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about/" component={About}/>
            <Route exact path="/wars/" component={Wars}/>
            <Route exact path="/war/:warId" component={War}/>
            <Route exact path="/players/" component={Players}/>
            <Route exact path="/player/:playerId" component={Player}/>
            <Route exact path="/dashboard/" component={Dashboard}/>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <BackToTop/>
      </div>
    );
  }
}

export default App;
