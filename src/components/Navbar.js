import { render } from "@testing-library/react";
import React, { Component } from "react";
import Naviteams from "./Navitems";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }

  activeitem = (item) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: item }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <Naviteams
            item="Home"
            tolink="/home"
            activenav={this.activeitem}
          ></Naviteams>
          <Naviteams
            item="About"
            tolink="/about"
            activenav={this.activeitem}
          ></Naviteams>
          <Naviteams
            item="Vedio"
            tolink="/education"
            activenav={this.activeitem}
          ></Naviteams>
          <Naviteams
            item="Type"
            tolink="/skills"
            activenav={this.activeitem}
          ></Naviteams>
          <Naviteams
            item="Contact"
            tolink="/contact"
            activenav={this.activeitem}
          ></Naviteams>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
