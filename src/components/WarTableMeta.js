import React, {Component} from 'react'

import { faSortAmountDownAlt, faFilter } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class WarTableMeta extends Component {
    render () {
        return (
            <div className="flex table-meta-container">
              <div className="upper-table flex flex-sb">
                <div className="flex flex-ac">
                  <div className="flex flex-ac filter-options"><FontAwesomeIcon className="option-icon" icon={faSortAmountDownAlt} />Ordenar</div>
                  <div className="flex flex-ac filter-options"><FontAwesomeIcon className="option-icon" icon={faFilter} />Filtro</div>
                </div>
                <div className="filter-table-info flex">Mostrando null de null resultados</div>
              </div>
            </div>
        )
    }
}