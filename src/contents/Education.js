import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic text-primary border border-5 border border-primary rounded-3 p-3 mb-2 bg-light text-dark">
          Video
        </h1>
        <Widecard
          title="ชื่อ : สารคดี สำรวจโลก ตอน สีสันแห่งป่าชายเลน"
          where="ช่อง : Next Step"
          from="ปี : 2020"
          to="Present"
          source="ที่มา : https://www.youtube.com/embed/4ZJAc6F2284"
        />
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/4ZJAc6F2284"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        <Widecard
          title="ชื่อ : ดูสัตว์ประหลาดตามป่าโกงกาง...!! [โจโฉ]"
          where="ช่อง : JoCho Sippawat"
          from="ปี : 2020"
          to="Present"
          source="ที่มา : https://www.youtube.com/embed/0klEwyyhTm4"
        />
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/0klEwyyhTm4"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        <Widecard
          title="ชื่อ : การอนุรักษ์ป่าชายเลน"
          where="ช่อง : Areerat Sripoom"
          from="ปี : 2011"
          to="Present"
          source="ที่มา : https://www.youtube.com/embed/EryesMq6-ig"
        />
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/EryesMq6-ig"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        <Widecard
          title="ชื่อ : ปัญหาที่เกิดขึ้นกับป่าชายเลนและแนวทางการแก้ปัญหา"
          where="ช่อง : แหล่งเรียนรู้ออนไลน์ สสวท."
          from="ปี : 2014"
          to="Present"
          source="ที่มา : https://www.youtube.com/watch?v=JKOtfcvsP-s"
        />
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/JKOtfcvsP-s"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Education;
