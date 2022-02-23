import React, { Component } from "react";
import { typedata } from "../../data";
import Typecall from "../Typecall";

export default class Typelist extends Component {
  state = {
    types: typedata,
  };
  removeShop = (id) => {
    const { types } = this.state;
    const sortedshop = types.filter((type) => type.id !== id);
    this.setState({
      types: sortedshop,
    });
  };
  render() {
    const { types } = this.state;
    const { removeShop } = this.state;
    return (
      <div className="typeList">
        {types.map((type) => (
          <Typecall key={type.id} type={type} removeShop={this.removeShop} />
        ))}
      </div>
    );
  }
}
