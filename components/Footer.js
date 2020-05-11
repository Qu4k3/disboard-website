import React, {Component} from 'react'

import GlobalNav from './GlobalNav'
import SocialNav from './SocialNav';

const year = new Date().getFullYear();

export default class Footer extends Component {
    render () {
        return (
        <footer id="footer">
            <div class="inner">
                <GlobalNav />
                <SocialNav />
                <p class="copyright">©2018-{year}／<br class="sp_b" />Disboard.team</p>
            </div>
        </footer>
        )
    }
}