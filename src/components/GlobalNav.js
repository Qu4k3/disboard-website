import React, {Component} from 'react'

import { Link } from 'react-router-dom'

export default class GlobalNav extends Component {
    render () {
        const { location } = this.props;
    
        const homeActive = location.pathname === "/" ? "current" : "";
        const warsActive = location.pathname.match(/^\/wars/) ? "current" : "";
        const playersActive = location.pathname.match(/^\/players/) ? "current" : "";
        const aboutActive = location.pathname.match(/^\/about/) ? "current" : "";

        return (        
          <nav class="global-navi">
              <ul>
                    <li className={homeActive}>
                        <Link to={'/'}>
                            <p>Home<br /><span>ホーム</span></p>
                        </Link>
                    </li>
                    <li className={warsActive}>
                        <Link to={'/wars/'}>
                            <p>WARS<br /><span>戦争</span></p>
                        </Link>
                    </li>
                    <li className={playersActive}>
                        <Link to={'/players/'}>
                            <p>JUGADORES<br /><span>選手たち</span></p>
                        </Link>
                    </li>
                    <li className={aboutActive}>
                        <Link to={'/about/'}>
                            <p>EQUIPO<br /><span>チーム</span></p>
                        </Link>
                    </li>
              </ul>
          </nav>                
        )
    }
}