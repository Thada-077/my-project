import React from "react";
import { FiCode } from "react-icons/fi";
import "./CallToAction.css";

function CallToAction() {
  return (
    <div className="cta-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-text">
          <FiCode className="FiCode" />
          <h2>We're react dev team</h2>
          <p>
            เว็บไซต์นี้เป็นส่วนหนึ่งของรายวิชา วิจัยและดำเนินงาน
            ของนักศึกษามหาวิทยาลัยส่วนสุนันทา ปีการศึกษา 2562
            ทำขึ้นเพื่อใช้ในการศึกษาและ พัฒนาการใช้ node.js และ react
            ในการสร้างเว็บไซต์
          </p>
          <a
            href="https://ssru.ac.th/"
            target="_blank"
            rel="noopender noreferrer"
            className="cta-btn"
          >
            get to know us
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
