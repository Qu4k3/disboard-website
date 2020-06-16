import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'

import SectionTile from '../components/SectionTitle'
import PlayerCard from '../components/PlayerCard'

import API from '../api'

export class Players extends Component {
    state = {
        players: []
    }
    
    componentDidMount() {
    API.get(`players/`).then(res => {
            this.setState({ players: res.data.players })
        })
    }

    render() {
        return (
            <section className="contents">
                <Helmet>
                    <title>『 』 / Miembros del equipo</title>
                    <meta name="description" content="Miembros del equipo" />

                    <meta property="og:title" content="『 Disboard 』 / Miembros del equipo" />
                    <meta property="og:description" content="Miembros del equipo" />
                </Helmet>
                <SectionTile title="JUGADORES" alt="選手たち" />
                <article>
                    <div className="heading">
                        <h3>
                            <span>Staff</span>
                        </h3>
                    </div>
                    <div className="detail flex-container players-container">

                        <Link className="player-card" to={'/player/Uy2sZ5ef'}>
                            <PlayerCard
                                avatarURL="https://www.gravatar.com/avatar/6dbbe4cca656c7058e9aedda61367dd0"
                                country="es"
                                name="Quake"
                                tag="Quake#1470"
                                in="06-09-2018"
                                fc="6757-8638-3964"
                            />
                        </Link>
                        <Link className="player-card" to={'/player/h15sqI4D'}>
                            <PlayerCard
                                avatarURL="https://www.mariokartcentral.com/forums/data/avatars/l/0/193.jpg"
                                country="co"
                                name="Caizer"
                                tag="Caizer#6911"
                                in="06-09-2018"
                                fc="6317-9462-5122"
                            />
                        </Link>                    
                    </div>
                    <div className="heading">
                        <h3>
                            <span>Miembros</span>
                        </h3>
                    </div>
                    <div className="detail flex-container players-container members">
                    { this.state.players.map(player => 
 
                        <Link key={player.player_id} className="player-card" to={'/player/'+player.player_id}>
                                <PlayerCard
                                    avatarURL={player.mkc_avatar_url}
                                    country={player.country.code.toLowerCase()}
                                    name={player.player_name}
                                    tag={player.player_tag}
                                    in={player.player_registry.in}
                                    fc={player.switch_fc}
                                />
                            </Link>
                        
                    )}
                    </div>
                    {/*<div className="heading">
                        <h3>
                            <span>Allies</span>
                        </h3>
                    </div>
                    <div className="detail">
                        
                    </div>*/}
                </article> 
            </section>
        );
    }
}

export default Players;