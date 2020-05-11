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

import Footer from './components/Footer';
import Header from './components/Header';

import 'normalize.css';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <main id="main" class="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about/" component={About}/>
            <Route path="/wars/" component={Wars}/>
            <Route path="/war/:warId" component={War}/>
            <Route path="/players/" component={Players}/>
            <Route path="/player/:playerId" component={Player}/>
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
