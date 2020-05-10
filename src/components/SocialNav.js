import React, {Component} from 'react'

export default class SocialNav extends Component {
    render () {
        return (
          <nav class="social-navi">
            <ul>
                <li>
                    <a class="twitter" href="https://twitter.com/DisboardTeam" target="_blank">
                        <img src="assets/img/twitter_ico.png" />
                    </a>
                </li>
                <li>
                    <a class="discord" href="https://discord.gg/YmFtq7m" target="_blank">
                        <img src="assets/img/discord_ico.png" />
                    </a>
                </li>
            </ul>
          </nav> 
        )
    }
}