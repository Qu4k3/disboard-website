import React, {Component} from 'react'

import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render () {
        return (        
          <nav class="global-navi">
              <ul>
                    <li class="current">
                        <Link to={'/wars/'}>
                            <p>WARS<br /><span>戦争</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/players/'}>
                            <p>JUGADORES<br /><span>選手たち</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about/'}>
                            <p>EQUIPO<br /><span>チーム</span></p>
                        </Link>
                    </li>
              </ul>
          </nav>                
        )
    }
}