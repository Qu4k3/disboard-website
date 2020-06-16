import React, {Component} from 'react'

import GlobalNav from './GlobalNav'
import SocialNav from './SocialNav';

const year = new Date().getFullYear();

export default class Footer extends Component {
    render () {
        return (
        <footer id="footer">
            <div className="inner">
                <GlobalNav />
                <SocialNav />
                <p className="copyright">©2018-{year}／<br className="sp_b" />Disboard.team</p>
            </div>
        </footer>
        )
    }
}