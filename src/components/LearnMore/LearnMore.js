import React from "react";
import "./LearnMore.css";

function LearnMore() {
  const questions = [
    {
      id: 1,
      question: "What is the VR dorm feature?",
      answer:
        "The VR dorm feature is a technology that allows incoming students to take a virtual tour of the college dorms. It gives them a glimpse into the social aspect of the dorms before they arrive on campus.",
    },
    {
      id: 2,
      question: "How can I view a dorm room using Matterport 3D technology?",
      answer:
        "You can easily view the technology after you click on a dorm room to view. It will present you with the Matterport scan and once you click 'Enter', you can freely roam through the scan.",
    },
    {
      id: 3,
      question: "What types of dorms are available in VR?",
      answer:
        "We have a variety of dorms available in VR, including single rooms, double rooms, and suites. Each dorm has been carefully scanned to replicate the real-life experience as closely as possible.",
    },
    {
      id: 4,
      question: "Can I customize my VR dorm experience?",
      answer:
        "Not yet! We aim to make changes in the future so a user can customize a VR dorm by choosing different furniture and decor options.",
    },
    {
      id: 5,
      question:
        "Will I be able to see the layout of the dorm room and its dimensions?",
      answer:
        "Yes! Each dorm has the dimensions and layouts mapped out under its description. Feel free to take a look at it for yourself!",
    },
  ];

  return (
    <div className="faq" id="faq">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <ul className="faq-list">
          {questions.map((question) => (
            <li key={question.id} className="faq-item">
              <div className="faq-question">{question.question}</div>
              <div className="faq-answer">{question.answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LearnMore;
