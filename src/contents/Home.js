import React, { Component, useContext } from "react";
import Social from "../components/Social";
import profliepic from "../img/pic1.jpg";
import ReactTypingEffect from "react-typing-effect";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";
import { AuthContext } from "../login/Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="condiv home">
      <div className="container mt-5">
        <button
          onClick={() => firebaseConfig.auth().signOut()}
          class="btn btn-outline-danger position-absolute top-0 end-0"
        >
          Sign Out
        </button>
      </div>
      <ReactTypingEffect
        text={[
          "Welcome to website Mangrove forest exhibition",
          "ยินดีตอนรับเข้าสู่เว็บไซต์นิทรรศการป่าชายเลน",
        ]}
        speed={80}
        eraseDelay={300}
        className="typingeffect"
      />
      <img src={profliepic} alt="proflie" className="profliepic" />
      <Social />
    </div>
  );
};

export default Home;
