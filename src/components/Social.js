import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/Thada-077"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/hollow_few/"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100002479405432"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    );
  }
}

export default Social;
