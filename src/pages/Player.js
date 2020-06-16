import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

import SectionTile from '../components/SectionTitle'
import PlayerProfile from '../components/PlayerProfile'

import API from '../api'

export class Player extends Component {

    state = {
        player: {},
        playerId: this.props.match.params.playerId
    }
    
    componentDidMount() {
    API.get(`players/`+this.state.playerId).then(res => {
            this.setState({ player: res.data.player })
        })
    }

    render() {
        return (
            <section className="contents">
                <Helmet>
                    <title>『 』 / </title>
                    <meta name="description" content="" />

                    <meta property="og:title" content="『 Disboard 』 / " />
                    <meta property="og:description" content="" />
                </Helmet>
                <SectionTile title={this.state.player.player_name + "'s Profile"} alt="選手たち" />
                <article>

                    <div className="detail flex player-container">


                        <PlayerProfile
                            avatarURL={this.state.player.mkc_avatar_url}
                            name={this.state.player.player_name}
                            /*country={this.state.player.country.code.toLowerCase()}*/
                            tag={this.state.player.player_tag}
                            fc={this.state.player.switch_fc}
                            mkc_profile={this.state.player.mkc_player_profile}
                        />
                                            
                    </div>
                    
                </article> 
            </section>
        );
    }
}

export default Player;