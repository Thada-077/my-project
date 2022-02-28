import React, { Component } from "react";
import Banner from "../main/Banner";
import CallToAction from "../main/CallToAction";
import Content from "../main/Content";
import Footer from "../main/Footer";
class About extends Component {
  render() {
    return (
      <div className="condiv about ">
        <h1 className="subtopic text-primary border border-5 border border-primary rounded-3 p-3 mb-2 bg-light text-dark">
          ป่าชายเลน
        </h1>
        <Banner />
        <Content />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default About;
