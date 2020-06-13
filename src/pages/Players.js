import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

import SectionTile from '../components/SectionTitle'

export class Players extends Component {
    render() {
        return (
            <section class="contents">
                <Helmet>
                    <title>『 』 / Acerca del equipo</title>
                    <meta name="description" content="Acerca del equipo" />

                    <meta property="og:title" content="『 Disboard 』 / Acerca del equipo" />
                    <meta property="og:description" content="Acerca del equipo" />
                </Helmet>
                <SectionTile title="JUGADORES" alt="選手たち" />
                <article>
                    <div class="heading">
                        <h3>
                            <span>Staff</span>
                        </h3>
                    </div>
                    <div class="detail flex-container">

                    </div>
                    <div class="heading">
                        <h3>
                            <span>Miembros</span>
                        </h3>
                    </div>
                    <div class="detail">
                    <div class="player">
                        <img src="https://cdn.discordapp.com/avatars/147882388347682816/a_b11a0d5e0b55e1bfd7e76b6c606088d6.gif" alt="Quake" />
                    </div>
                    <div class="player"></div>
                    </div>
                    <div class="heading">
                        <h3>
                            <span>Allies</span>
                        </h3>
                    </div>
                    <div class="detail">
                        
                    </div>
                </article> 
            </section>
        );
    }
}

export default Players;