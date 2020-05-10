import React, {Component} from 'react'

import GlobalNav from './GlobalNav'
import SocialNav from './SocialNav';
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

export default class Header extends Component {
    render () {
        return (
            <header id="header">
                <div class="inner">
                    <section class="logo">
                        <Link to={'/'}>
                            <img src="assets/img/logo.png" alt="ノーゲーム・ノーライフ ゼロ" />
                        </Link>
                    </section>

                    <div class="global-navi-trigger sp_b"><span></span><span></span><span></span></div>
                    
                    <section class="login text-btn">
                        <a href="/">Login via Discord</a>
                    </section>
                    
                    <SocialNav />
                    <GlobalNav />
                </div>
            </header>
        )
    }
}