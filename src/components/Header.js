import React, {Component} from 'react'

import GlobalNav from './GlobalNav'
import SocialNav from './SocialNav'
import { Link } from 'react-router-dom'

import logo from '../images/disboard-logo-alt.svg'

export default class Header extends Component {
    render () {
        return (
            <header id="header">
                <div className="inner">
                    <section className="logo">
                        <Link to={'/'}>
                            <img className="img-responsive" src={logo} alt="Disboard logo" />
                        </Link>
                    </section>

                    <div className="global-navi-trigger sp-b"><span></span><span></span><span></span></div>
                    
                    <section className="login text-btn">
                        <a href="https://api.disboard.team/discord/login">Login via Discord</a>
                    </section>
                    
                    <SocialNav />
                    <GlobalNav />
                </div>
            </header>
        )
    }
}