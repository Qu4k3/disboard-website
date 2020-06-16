import React, { Component } from "react";
import { Helmet } from "react-helmet";

import SectionTile from "../components/SectionTitle";

import API from "../api";
import WarTableMeta from "../components/WarTableMeta";
import WarTable from "../components/WarTable";
import Teams from "../components/Teams";

export class Wars extends Component {
  state = {
    wars: [],
  };

  componentDidMount() {
    API.get(`wars/`).then((res) => {
      this.setState({ wars: res.data.wars });
    });
  }

  render() {
    return (
      <section className="contents">
        <Helmet>
          <title>『 』 / Wars</title>
          <meta name="description" content="Wars" />

          <meta property="og:title" content="『 Disboard 』 / Wars" />
          <meta property="og:description" content="Wars" />
        </Helmet>
        <SectionTile title="Wars" alt="戦争" />
        <article>
            <div className="w70 wars-left clearfix">
          <div className="detail flex flex-sb war-container">
            <div className="filter-block">
              <div className="filter-label">Modalidad</div>
              <div className="filter-tab-block">
                <span className="btn-tab-filter active">Cualquiera</span>
                <span className="btn-tab-filter">3v3</span>
                <span className="btn-tab-filter">4v4</span>
                <span className="btn-tab-filter">5v5</span>
                <span className="btn-tab-filter">6v6</span>
              </div>
            </div>
            <div className="filter-block">
              <div className="filter-label">Encuentro</div>
              <div className="filter-tab-block">
                <span className="btn-tab-filter active">Cualquiera</span>
                <span className="btn-tab-filter">Friendly</span>
                <span className="btn-tab-filter">Interno</span>
                <span className="btn-tab-filter">Competitivo</span>
              </div>
            </div>
          </div>
          <WarTableMeta />
          <WarTable />
          </div>
          <div className="w30 wars-right clearfix">
            <Teams />
        </div>
        <div></div>
        </article>
       
      </section>
    );
  }
}

export default Wars;
