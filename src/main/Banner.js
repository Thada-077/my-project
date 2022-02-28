import React from "react";
import "./Banner.css";

let bannerData = {
  title: "Welcome to the Website",
  desc: "ยินดีต้อนรับเข้าสู่เว็บไซต์นิทรรศการป่าชายเลน ที่ให้ผู้เข้าชมได้ศึกษาข้อมูลเกี่ยวกับสิ่งต่างๆ ในป่าชายเลยเพื่อให้ผู้เข้าชมมีความสนใจในป่าชายเลนมากขึ้น และ ยังช่วยทำมห้ป่าชายเลนเป็นที่รู้จัก ทำให้ผู้คนรู้จักวิธีเอาใจใส่ป่าชายเลนดีขึ้น",
  eng: "Welcome to the Mangrove Forest Exhibition website. that allows visitors to study information about things in the mangrove forest so that visitors are more interested in the mangrove forest and also help make the mangrove forest known Make people know how to care for the mangrove forest better.",
};
function Banner() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.land-links.org/wp-content/uploads/2018/02/mangroves_webinar_fi.jpg"
            class="d-block w-100"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{bannerData.title}</h5>
            <a
              href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AOaemvIHirkvfE71MZnBhqKTIb9iALDXTA:1636385751538&q=%E0%B8%95%E0%B8%B3%E0%B9%81%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%87%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A5%E0%B8%99&rflfq=1&num=10&ved=2ahUKEwiK2L37i4n0AhVBYysKHegCBxgQtgN6BAgcEAQ#rlfi=hd:;si:;mv:[[14.042531281706461,101.69374351796873],[12.955572786552413,99.63380699453123],null,[13.499670836871637,100.66377525624998],10]"
              target="_blank"
              rel="noopender noreferrer"
              class="btn btn-outline-info"
            >
              Location
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://land-links.org/wp-content/uploads/2016/12/mangrove-work-banner.png"
            class="d-block w-100"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{bannerData.desc}</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://thumbs.dreamstime.com/b/mangrove-forest-florida-everglades-dense-brackish-creek-68082826.jpg"
            class="d-block w-100"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{bannerData.eng}</h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
