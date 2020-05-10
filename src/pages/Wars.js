import React, { Component } from 'react';

import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../images/logo.svg';

export class Wars extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <FontAwesomeIcon icon={faDiscord} />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
            </div>
        );
    }
}

export default Wars;