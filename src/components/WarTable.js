import React, { Component } from "react";

export default class WarTable extends Component {
  render() {
    return (
      <div className="flex war-table-container">
        <div className="war">
          <div className="team">
            <img src="https://cdn.mariokartworld.com/equipos/id.jpeg" alt="" className="logo"
            />
            <span className="info">
              <span className="name">Ink Dragons</span>
              <span className="tag">ID</span>
              <span className="score win">573</span>
            </span>
          </div>
          <div className="team">
            <span className="info">
              <span className="score lose">
                332
                <span className="penal">
                  <span>-79</span>
                </span>
              </span>
              <span className="tag">BW</span>
              <span className="name">Black Wolves</span>
            </span>
            <img src="https://cdn.mariokartworld.com/equipos/bw.png" alt="" className="logo"
            />
          </div>
          <div className="war-info">
            <span
              className="table"
              data-img="https://cdn.mariokartworld.com/tablas/IMG_20181014_230836.jpg"
            >
              <i className="fal fa-table"></i>
            </span>
          </div>
        </div>


        <div className="war">
<div className="team">
<img className="logo" src="https://cdn.mariokartworld.com/equipos/mtz.png" alt="" />
<span className="info">
<span className="name">Mushroom Team Z</span><span className="tag">MTz</span><span className="score win">585</span>
 </span>
</div>
<div className="team">
<span className="info">
<span className="score lose">399</span><span className="tag">Σ★</span> <span className="name">Elegance</span>
</span>
<img className="logo" alt="" src="https://cdn.mariokartworld.com/equipos/e.png" />
</div>
<div className="war-info"><span className="table" data-img="https://cdn.mariokartworld.com/tablas/2mZcGJcgBNieGFv2xP8DhLSyO57KIncAAAAASUVORK5CYII.png"><i className="fal fa-table"></i></span></div>
</div>


      </div>
    );
  }
}
