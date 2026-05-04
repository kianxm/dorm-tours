import React, { useState } from "react";
import Reveal from "../Reveal/Reveal";
import "./LearnMore.css";

const QUESTIONS = [
  {
    id: 1,
    question: "What are virtual dorm tours?",
    answer:
      "Virtual dorm tours let incoming students explore Santa Clara residence halls in 3D — captured with LiDAR-equipped cameras so the experience matches the real space. You get a feel for the layout and the social vibe of each hall before stepping on campus.",
  },
  {
    id: 2,
    question: "How do I view a dorm in 3D?",
    answer:
      "Tap any dorm card on the homepage. The 3D scan loads in your browser — click \"Enter\" and you can walk through the lobby, lounges, and rooms freely.",
  },
  {
    id: 3,
    question: "Which residence halls are available?",
    answer:
      "All on-campus first- and second-year halls plus University Villas and Nobili Hall for upperclassmen. Singles, doubles, mini-suites, and apartment-style options are all represented.",
  },
  {
    id: 4,
    question: "Will I see room dimensions and layouts?",
    answer:
      "Yes. Each dorm page lists room dimensions, furniture sizes, and a floorplan image so you can plan exactly how your space will fit together.",
  },
  {
    id: 5,
    question: "Can I customize my virtual room?",
    answer:
      "Not yet. We're scoping a future update where students can place furniture and decor inside the scan to plan move-in day.",
  },
];

function LearnMore() {
  const [open, setOpen] = useState(1);

  const toggle = (id) => setOpen((current) => (current === id ? null : id));

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <Reveal as="header" className="faq__header">
          <span className="faq__eyebrow">FAQ</span>
          <h2 className="faq__title">Everything you might be wondering.</h2>
          <p className="faq__lede">
            Quick answers about how the tours work and what to expect.
          </p>
        </Reveal>

        <ul className="faq__list">
          {QUESTIONS.map((q, i) => {
            const isOpen = open === q.id;
            return (
              <Reveal as="li" key={q.id} delay={i + 1} className="faq__item">
                <button
                  type="button"
                  className={`faq__btn ${isOpen ? "is-open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${q.id}`}
                  onClick={() => toggle(q.id)}
                >
                  <span>{q.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>
                <div
                  id={`faq-panel-${q.id}`}
                  className={`faq__panel ${isOpen ? "is-open" : ""}`}
                  role="region"
                >
                  <div className="faq__panel-inner">{q.answer}</div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default LearnMore;
