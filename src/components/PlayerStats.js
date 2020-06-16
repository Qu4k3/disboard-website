import React, {Component} from 'react'

import { faSwords, faStar, faHeartRate, faChartPieAlt } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PlayerStats extends Component {
    render () {
        return (

              <div className="player-stats flex f-vertical">
                <div className="heading">
                  <h3>
                    <span>Stats</span>
                  </h3>
                </div>
                  
                  <div className="player-score flex">
                    <div className="player-score-inner flex flex-sb">
                    <div className="stats-item flex">
                        <FontAwesomeIcon className="stats-icon" icon={faSwords} />
                        <div>
                          <div className="stats-label">Wars jugadas</div>
                          <div>null</div>
                        </div>
                      </div>
                      <div className="stats-item flex">
                        <FontAwesomeIcon className="stats-icon" icon={faHeartRate} />
                        <div>
                          <div className="stats-label">Media pts.</div>
                          <div>null</div>
                        </div>
                      </div>
                      <div className="stats-item flex">
                        <FontAwesomeIcon className="stats-icon" icon={faChartPieAlt} />
                        <div>
                          <div className="stats-label">Ratio V/D</div>
                          <div>null</div>
                        </div>
                      </div>
                      <div className="stats-item flex">
                        <FontAwesomeIcon className="stats-icon" icon={faStar} />
                        <div>
                          <div className="stats-label">MVPs</div>
                          <div>null</div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>              

        )
    }
}