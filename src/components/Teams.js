import React, {Component} from 'react'

import API from '../api'
import TeamCard from '../components/TeamCard'

export default class Teams extends Component {
    state = {
      teams: [],
    };

    componentDidMount() {
      API.get(`teams/`).then((res) => {
        this.setState({ teams: res.data.teams });
      });
    }
  
    render () {
        return (

              <div className="team-block flex f-vertical">
                <div className="heading">
                  <h3>
                    <span>Equipos enfrentados</span>
                  </h3>
                </div>
                <div className="outer-team-list">
                { this.state.teams.map(team => 
                  <TeamCard key={team.team_id}                    
                    name={team.team_name}
                    tag={team.team_tag}
                    logo={team.team_logo}
                    mkc_profile={team.mkc_team_profile}
                  />
                )}
                </div>                 
                  
              </div>              

        )
    }
}