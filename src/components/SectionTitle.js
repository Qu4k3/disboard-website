import React, {Component} from 'react'

export default class SectionTitle extends Component {
    render () {
        return (
            <h2>{this.props.title}<span>{this.props.alt}</span></h2>
        )
    }
}