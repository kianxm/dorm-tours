import React, { useState } from "react";
import "./LearnMore.css";

function LearnMore() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is the VR dorm feature?",
      answer:
        "The VR dorm feature is a technology that allows incoming students to take a virtual tour of the college dorms. It gives them a glimpse into the social aspect of the dorms before they arrive on campus.",
    },
    {
      id: 2,
      question: "How do I access the VR dorm feature?",
      answer:
        "You can access the VR dorm feature by logging into your account on our website. Once you're logged in, click on the 'VR Dorms' tab to get started.",
    },
    {
      id: 3,
      question: "What types of dorms are available in VR?",
      answer:
        "We have a variety of dorms available in VR, including single rooms, double rooms, suites, and apartments. Each dorm has been carefully designed to replicate the real-life experience as closely as possible.",
    },
    {
      id: 4,
      question: "Can I customize my VR dorm experience?",
      answer:
        "Yes! You can customize your VR dorm experience by choosing different furniture and decor options for your virtual room. You can also invite friends to join you in the virtual world.",
    },
    {
      id: 5,
      question: "Is the VR dorm feature free?",
      answer:
        "Yes, the VR dorm feature is completely free for all incoming students. We want to give you the best possible experience before you arrive on campus.",
    },
  ];

  const handleQuestionClick = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="faq" id="faq">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <ul className="faq-list">
          {questions.map((question) => (
            <li key={question.id} className="faq-item">
              <div
                className="faq-question"
                onClick={() => handleQuestionClick(question.id)}
              >
                {question.question}
              </div>
              <div
                className={`faq-answer ${
                  activeQuestion === question.id ? "active" : ""
                }`}
              >
                {question.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LearnMore;
