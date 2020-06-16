import React, {Component} from 'react'

import PlayerStats from '../components/PlayerStats'
import WarTable from './WarTable'

export default class PlayerProfile extends Component {
    render () {
        return (
          <div>
            <div className="flex w100 mb-20">
              <div className="player-profile">
                  <img src={this.props.avatarURL} alt={this.props.name} />
                  <div className="player-description">
                    <div>
                      <span className={"flag-icon flag-icon-" + this.props.country + " flag-icon-squared"}></span>
                      <span className="player-name">{this.props.name}</span>
                      <span className="player-tag">{this.props.tag}</span>
                    </div>
                    <div className="flex flex-sb">
                      <div className="flex f-vertical mr-20">
                        <span className="player-in">Miembro desde: {this.props.in}</span>                  
                        <span className="player-fc">Switch FC: {this.props.fc}</span>
                      </div>
                      <div className="flex">
                        <div className="text-btn"><a href={this.props.mkc_profile} target="_blank" rel="noopener noreferrer">Perfil de MKC</a></div>  
                      </div>                  
                    </div>
                  </div>
              </div>
              <PlayerStats />
            </div>
            <div className="player-profile-war-table">
              <div className="heading"><h3><span>Wars recientes</span></h3></div>
              <WarTable />  
            </div> 
            </div> 
        )
    }
}