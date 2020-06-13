import React, {Component} from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'

export default class GlobalNav extends Component {
    render () {
        /*const { location } = this.props;
    
        const homeActive = location.pathname === "/" ? "current" : "";
        const warsActive = location.pathname.match(/^\/wars/) ? "current" : "";
        const playersActive = location.pathname.match(/^\/players/) ? "current" : "";
        const aboutActive = location.pathname.match(/^\/about/) ? "current" : "";
*/
        return (        
          <nav class="global-navi">
                <Helmet>
                <script src="/path/to/resource.js" type="text/javascript" />
                </Helmet>
                <ul>
                    <li class="li-home">
                        <Link to={'/'}>
                            <p>HOME<br /><span>ホーム</span></p>
                        </Link>
                    </li>
                    <li class="li-wars">
                        <Link to={'/wars/'}>
                            <p>WARS<br /><span>戦争</span></p>
                        </Link>
                    </li>
                    <li class="li-players">
                        <Link to={'/players/'}>
                            <p>JUGADORES<br /><span>選手たち</span></p>
                        </Link>
                    </li>
                    <li class="li-about">
                        <Link to={'/about/'}>
                            <p>EQUIPO<br /><span>チーム</span></p>
                        </Link>
                    </li>
                </ul>
          </nav>                
        )
    }
}