import React, {Component} from 'react'

import twitterIcon from '../images/twitter_ico.png'
import discordIcon from '../images/discord_ico.png'

export default class SocialNav extends Component {
    render () {
        return (
          <nav class="social-navi">
            <ul>
                <li>
                    <a class="twitter" href="https://twitter.com/DisboardTeam" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter page" />
                    </a>
                </li>
                <li>
                    <a class="discord" href="https://discord.gg/YmFtq7m" target="_blank" rel="noopener noreferrer">
                        <img src={discordIcon} alt="Discord server" />
                    </a>
                </li>
            </ul>
          </nav> 
        )
    }
}