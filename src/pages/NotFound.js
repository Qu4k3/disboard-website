import React, { Component } from 'react'
import {Helmet} from "react-helmet"

export class NotFound extends Component {
    render() {
        return (
            <section class="contents">
                <Helmet>
                    <title>『 』 / Page not found</title>
                    <meta name="description" content="Page not found" />

                    <meta property="og:title" content="『 Disboard 』 / Page not found" />
                    <meta property="og:description" content="Page not found" />
                </Helmet>
                <h2>The page you are looking for doesn't exist</h2>
            </section>
        );
    }
}