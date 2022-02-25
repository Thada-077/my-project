import React, { useState, Component } from "react";
import "../contents/Sq.css";

export default function Quiz() {
  const questions = [
    {
      questionText: "1.ป่าชายเลนส่วนใหญ่ประกอบด้วยพันธุ์ไม้ชนิดใด?",
      answerOptions: [
        { answerText: "ไม้ยืนต้น", isCorrect: false },
        { answerText: "ไม้พลัดใบ", isCorrect: false },
        { answerText: "ไม้โกงกาง", isCorrect: true },
        { answerText: "ไม้ไม่ผลัดใบ", isCorrect: false },
      ],
    },
    {
      questionText: "2.พันธ์ไม้ชนิดใดไม่พบอยู่ในป่าชายเลน?",
      answerOptions: [
        { answerText: "ตะบูน", isCorrect: false },
        { answerText: "กล้วยไม้", isCorrect: true },
        { answerText: "โปรงขาว", isCorrect: false },
        { answerText: "เหงือกปลาหมอ", isCorrect: false },
      ],
    },
    {
      questionText: "3.ป่าชายเลนชนิดใดที่มีต้นโกงกางขึ้นอยู่อย่างหนาแน่น?",
      answerOptions: [
        { answerText: "ป่าโกงกาง", isCorrect: true },
        { answerText: "ป่าตะบูน", isCorrect: false },
        { answerText: "ป่าโปรง", isCorrect: false },
        { answerText: "ป่าตาตุ่ม", isCorrect: false },
      ],
    },
    {
      questionText: "4.ข้อใดไม่ใช่ประโยชน์ของป่าชายเลน?",
      answerOptions: [
        {
          answerText: "ที่อยู่อาศัยของพืชและสัตว์ตามธรรมชาติ",
          isCorrect: false,
        },
        { answerText: "เป็นแหล่งแร่ดีบุก", isCorrect: false },
        { answerText: "เป็นแหล่งเชื้อเพลิง", isCorrect: false },
        { answerText: "ช่วยรักษาระดับน้ำทะเล", isCorrect: true },
      ],
    },
    {
      questionText: "5.ต้นจาก สามารถค้นพบได้ที่ป่าชายเลนชนิดใด?",
      answerOptions: [
        { answerText: "ป่าเสม็ด", isCorrect: false },
        { answerText: "ป่าโกงกาง", isCorrect: true },
        { answerText: "ป่าฝาด", isCorrect: false },
        { answerText: "พบได้ทุกเขตป่า", isCorrect: false },
      ],
    },
    {
      questionText: "6. ข้อใดกล่าวถึงเขตป่าตะบูนและโปรงได้ถูกต้อง?",
      answerOptions: [
        {
          answerText:
            "มีต้นฝาดขึ้นอยู่อย่างหนาแน่น บางบริเวณอาจมี ลำแพน แทรกอยู่ด้วย",
          isCorrect: true,
        },
        {
          answerText: "เป็นบริเวณที่มีดินเลนแข็งขึ้นอยู่ในระดับที่น้ำ",
          isCorrect: false,
        },
        {
          answerText: "เป็นเขตสุดท้ายของป่าชายเลนที่น้ำท่วม",
          isCorrect: false,
        },
        {
          answerText: "พบต้น จาก (Nypa) ขึ้นอยู่เป็นหย่อม ๆ",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "7.เป็นบริเวณที่มีดินเลนแข็งขึ้นอยู่ในระดับที่น้ำจะท่วมถึงในช่วงน้ำเกิด ที่กล่าวมาคือป่าชนิดใด?",
      answerOptions: [
        { answerText: "ป่าฝาด", isCorrect: false },
        { answerText: "ป่าโกงกาง", isCorrect: false },
        { answerText: "เขตป่าตาตุ่ม", isCorrect: false },
        { answerText: "ไม่มีข้อใดถูก", isCorrect: true },
      ],
    },
    {
      questionText: "8.เขตป่าชนิดใดที่อยู่ติดกับป่าบก?",
      answerOptions: [
        { answerText: "ป่าโกงกาง", isCorrect: false },
        { answerText: "เขตป่าเสม็ด", isCorrect: true },
        { answerText: "เขตป่าตาตุ่ม และ ฝาด", isCorrect: false },
        { answerText: "อยู่ติดทุกป่า", isCorrect: false },
      ],
    },
    {
      questionText: "9.ป่าชนิดใดที่อยู่ในระดับที่น้ำท่วมถึงได้?",
      answerOptions: [
        { answerText: "เขตป่าโกงกาง", isCorrect: false },
        { answerText: "เขตป่าเสม็ด", isCorrect: false },
        { answerText: "เขตป่าตาตุ่ม", isCorrect: false },
        { answerText: "เขตป่าฝาด", isCorrect: true },
      ],
    },
    {
      questionText: "10.ดินในป่าชายเลนเป็นดินแบบใด?",
      answerOptions: [
        { answerText: "ดินร่วน", isCorrect: false },
        { answerText: "ดินเหนียว", isCorrect: false },
        { answerText: "ดินที่จากการทับถมของซากพืช ซากสัตว์", isCorrect: true },
        { answerText: "ดินทราย", isCorrect: false },
      ],
    },
    {
      questionText: "11.รากอากาศในป่าชายเลนมีกี่ชนิด?",
      answerOptions: [
        { answerText: "2 ชนิด", isCorrect: false },
        { answerText: "3 ชนิด", isCorrect: false },
        { answerText: "4 ชนิด", isCorrect: true },
        { answerText: "5 ชนิด", isCorrect: false },
      ],
    },
    {
      questionText: "12.รากแบบค้ำยันส่วนมากเป็นรากของต้นไม้ใดในป่าชายเลน?",
      answerOptions: [
        { answerText: "พังกาสุมดอกขาวพังกาสุมดอกแดง", isCorrect: false },
        { answerText: "ปลงทะเลปอทะเล", isCorrect: false },
        { answerText: "ต้นถั่วขาวเป้งทะเล", isCorrect: false },
        { answerText: "เตยทะเลต้นโกงกาง", isCorrect: true },
      ],
    },
    {
      questionText:
        "13.ต้นไม้ใดในป่าชายเลนที่หิ่งห้อยชอบบินมาตอมในเวลากลางคืน?",
      answerOptions: [
        { answerText: "หลาวชะโอน", isCorrect: false },
        { answerText: "ปอทะเล", isCorrect: false },
        { answerText: "เตยทะเล", isCorrect: false },
        { answerText: "ลำพู", isCorrect: true },
      ],
    },
    {
      questionText: "14.น้ำกร่อยหรือน้ำทะเลในสภาพปกติมีสมบัติเป็นอย่างไร?",
      answerOptions: [
        { answerText: "กรด", isCorrect: false },
        { answerText: "เบส", isCorrect: true },
        { answerText: "กลาง", isCorrect: false },
        { answerText: "ไม่มีข้อถูก", isCorrect: false },
      ],
    },
    {
      questionText: "15.บริเวณป่าชายเลนที่พบมากที่สุดคือบริเวณใด?",
      answerOptions: [
        { answerText: "เกาะ", isCorrect: false },
        { answerText: "บริเวณชายฝั่ง", isCorrect: true },
        { answerText: "มหาสมุทร", isCorrect: false },
        { answerText: "ปากแม่น้ำ", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        คำถามทบทวนความรู้
      </button>

      <div
        className="quiz"
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                <div className="question-section" class="modal-header">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section" class="modal-body">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        className="buttonAnswer"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
