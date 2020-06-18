import React, { Component } from "react";
import { Helmet } from "react-helmet";

import API from "../api";

import SectionTitle from "../components/SectionTitle"

export class Dashboard extends Component {
  state = {
    name: '',
    tag: '',
    logo: '',
    mkc_profile: ''
  }

  nameChange = event => {
    this.setState({ name: event.target.value });
    console.log(this.state)
  }
  tagChange = event => {
    this.setState({ tag: event.target.value });
    console.log(this.state)
  }
  logoChange = event => {
    this.setState({ logo: event.target.value });
    console.log(this.state)
  }
  mkcProfileChange = event => {
    this.setState({ mkc_profile: event.target.value });
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault();

    const team = {
      name: this.state.name,
      tag: this.state.tag,
      logo: this.state.logo,
      mkc_profile: this.state.mkc_profile
    };

    API.post(`/teams`, { team })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <section className="contents">
        <Helmet>
          <title>『 』 / Dashboard</title>
          <meta name="description" content="Dashboard" />

          <meta property="og:title" content="『 Disboard 』 / Dashboard" />
          <meta property="og:description" content="Dashboard" />
        </Helmet>
        <SectionTitle title="Dashboard" />
        <article>        
          <form onSubmit={this.handleSubmit}>
            <h3>New Team</h3>

            <div className="form-w50">
              <label htmlFor="fname">Nombre</label>
              <input type="text" id="name" name="name" onChange={this.nameChange} />
            </div>
            <div className="form-w50">
              <label htmlFor="tag">Tag</label>
              <input type="text" id="tag" name="tag" onChange={this.tagChange} />
            </div>
            <div className="form-w50">
              <label htmlFor="logo">Logo url</label>
              <input type="text" id="logo" name="logo" onChange={this.logoChange} />
            </div>
            <div className="form-w50">
              <label htmlFor="mkc_profile">URL perfil MKC</label>
              <input type="text" id="mkc_profile" name="mkc_profile" onChange={this.mkcProfileChange} />
            </div>
            
            <button type="submit">Add</button>
          </form> 
        </article>
       
      </section>
    );
  }
}

export default Dashboard;
