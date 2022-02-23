import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Education from "./contents/Education";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";
import Quiz from "./contents/Quiz";
//content

function Mainpage() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
      </div>
    </Router>
  );
}

export default Mainpage;
