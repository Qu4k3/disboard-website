import React, { Component } from "react";
import { Helmet } from "react-helmet";

import SectionTile from "../components/SectionTitle";

export class About extends Component {
  render() {
    return (
      <section className="contents">
        <Helmet>
          <title>『 』 / Acerca del equipo</title>
          <meta name="description" content="Acerca del equipo" />

          <meta
            property="og:title"
            content="『 Disboard 』 / Acerca del equipo"
          />
          <meta property="og:description" content="Acerca del equipo" />
        </Helmet>
        <SectionTile title="EQUIPO" alt="チーム" />
        <article>
          <div className="heading">
            <h3>
              <span>Mandamientos</span>
            </h3>
          </div>
          <div className="detail">
            <div className="mandamientos">
              <h3>Mandamiento 1</h3>
              <p>
                El spam, insultos, burla, rq y cualquier otro comportamiento
                poco ético queda terminantemente prohibido.
              </p>

              <h3>Mandamiento 2</h3>
              <p>
                Todos los conflictos entre usuarios se resolverán en privado o
                hablándolo con los representantes del clan.
              </p>

              <h3>Mandamiento 3</h3>
              <p>
                Según el grado de incumplimiento de las normas, los líderes
                decidirán el seguimiento o no del jugador en el clan.
              </p>

              <h3>Mandamiento 4</h3>
              <p>
                Siempre y cuando no se infrinja el tercer mandamiento, uno puede
                quedarse tranquilo.
              </p>

              <p>[ ... ]</p>

              <h3>Mandamiento 9</h3>
              <p>
                En nombre de los dioses antiguos, los anteriores mandamientos no
                se pueden cambiar bajo ninguna circunstancia.
              </p>

              <h3>Mandamiento 10</h3>
              <p>¡No olvidéis pasarlo bien con los demás!</p>

              <p>(Adaptación de los mandamientos originales de la serie)</p>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default About;
