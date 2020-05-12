import React, {Component} from 'react'

import { faChevronUp } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export class BackToTop extends Component {
    render () {
        return (
          <div className="back-to-top">
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        )
    }
}