import React, { Component } from "react";
import "../Typecall/index.css";

export default class Typecall extends Component {
  render() {
    const { id, name, img, detail, address } = this.props.type;

    return (
      <div className="type">
        <div class="card shadow-lg p-3 mb-5 bg-body rounded">
          <img src={img} />
          <div class="card-body ">
            <h6 class="card-title">แหล่งที่มา : {detail}</h6>
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{address}</p>
          </div>
        </div>
      </div>
    );
  }
}
