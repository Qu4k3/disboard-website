import React, {Component} from 'react'

export default class TeamCard extends Component {
    render () {
        return (
            
            <div className="team-card-inner">
                <img src={this.props.logo} alt="Quake" />
                <div className="team-description">
                  <div className="flex flex-sb flex-ac">
                    <span className="team-name">{this.props.name}</span>
                    <span className="team-tag">{this.props.tag}</span>
                  </div>
                  <div className="detail">
                    <div className="text-btn"><a href={this.props.mkc_profile} target="_blank" rel="noopener noreferrer">MKC</a></div>
                  </div>
                </div>
            </div>
        )
    }
}