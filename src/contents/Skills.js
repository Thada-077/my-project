import React, { Component } from "react";
import Typelist from "../type/Typelist";
import Quiz from "./Quiz";
import "./style.css";

class Skills extends Component {
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic text-primary border border-5 border border-primary rounded-3 p-3 mb-2 bg-light text-dark">
          ประเภทของป่าชายเลน
        </h1>
        <Typelist />
        <div className="Quiz">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div class="card-body">
              <h5 class="card-title">Quiz</h5>
              <p class="card-text">
                คำถามทดสอบความรู้ความเข้าใจเกี่ยวกับป่าชายเลน
              </p>
              <Quiz />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
