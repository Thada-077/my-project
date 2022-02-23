import React, { Component } from "react";
import Banner from "../main/Banner";
import CallToAction from "../main/CallToAction";
import Content from "../main/Content";
import Footer from "../main/Footer";
class About extends Component {
  render() {
    return (
      <div className="condiv about">
        <h1 className="subtopic">ป่าชายเลน</h1>
        <Banner />
        <Content />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default About;
