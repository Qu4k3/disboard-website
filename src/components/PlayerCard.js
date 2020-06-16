import React, {Component} from 'react'

export default class PlayerCard extends Component {
    render () {
        return (
            
            <div className="player-card-inner">
              <img src={this.props.avatarURL} alt="Quake" />
              <div className="player-description">
                <div>
                  <span className={"flag-icon flag-icon-" + this.props.country + " flag-icon-squared"}></span>
                  <span className="player-name">{this.props.name}</span>
                  <span className="player-tag">{this.props.tag}</span>
                </div>
                <div>
                  <span className="player-in">Miembro desde: {this.props.in}</span>
                </div>
                <div>
                  <span className="player-fc">{this.props.fc}</span>
                </div>
              </div>
            </div>
        )
    }
}