import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

export class Home extends Component {
    render() {
        return (
            <section class="contents">
                <Helmet>
                    <title>『 Disboard 』 / Equipo competitivo de Mario Kart 8 Deluxe</title>
                    <meta name="description" content="Equipo competitivo de Mario Kart 8 Deluxe" />

                    <meta property="og:title" content="『 Disboard 』 / Equipo competitivo de Mario Kart 8 Deluxe" />
                    <meta property="og:description" content="Equipo competitivo de Mario Kart 8 Deluxe" />
                </Helmet>
                
            </section>
        );
    }
}

export default Home