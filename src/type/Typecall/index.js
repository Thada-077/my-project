import React, { Component } from "react";
import "../Typecall/index.css";

export default class Typecall extends Component {
  render() {
    const { id, name, img, detail, address } = this.props.type;

    return (
      <div className="type">
        <div class="card ">
          <img src={img} />
          <div class="card-body ">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{address}</p>
          </div>
        </div>
      </div>
    );
  }
}
