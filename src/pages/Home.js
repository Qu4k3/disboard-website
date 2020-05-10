import React, { Component } from 'react'

import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Footer from '../components/Footer'

import logo from '../images/logo.svg'

export default class Home extends Component {
    render() {
        return (
            <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <FontAwesomeIcon icon={faDiscord} />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
            <Footer />
            </div>
        );
    }
}

export default Home