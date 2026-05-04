import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DormData } from "../components/Dorms/DormsData";
import "./Dorm.css";

import { FaBed, FaSink } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineCheck,
} from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";

const Dorm = () => {
  const { name } = useParams();
  const dorm = DormData.find((d) => d.name === name);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  if (!dorm) {
    return (
      <div className="dorm dorm--missing">
        <h1>We couldn't find that dorm</h1>
        <Link to="/" className="dorm__back">
          ← Back to all dorms
        </Link>
      </div>
    );
  }

  const hasTestimonials = dorm.testimonials && dorm.testimonials.length > 0;
  const testimonial = hasTestimonials ? dorm.testimonials[index] : null;

  const prev = () =>
    setIndex((i) => (i - 1 + dorm.testimonials.length) % dorm.testimonials.length);
  const next = () => setIndex((i) => (i + 1) % dorm.testimonials.length);

  return (
    <div className="dorm">
      <header className="dorm__hero">
        <div className="dorm__hero-inner">
          <Link to="/" className="dorm__back">
            ← All dorms
          </Link>
          <h1 className="dorm__title">{dorm.title}</h1>
          {dorm.address && <p className="dorm__address">{dorm.address}</p>}

          <div className="dorm__quickfacts">
            <div>
              <FaBed />
              <span>{dorm.bedCount} beds</span>
            </div>
            <div>
              <FaSink />
              <span>
                {dorm.sinks} {dorm.sinks === 1 ? "sink" : "sinks"}
              </span>
            </div>
            <div>
              <BsFillPeopleFill />
              <span>{dorm.occupancy} people</span>
            </div>
          </div>

          <a
            className="dorm__pricing"
            href="https://www.scu.edu/living/residential-living-options/2022-2023-room--board-rates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View room & board rates →
          </a>
        </div>
      </header>

      <section className="dorm__tour-wrap">
        {dorm.embedLink ? (
          <iframe
            className="dorm__tour"
            src={dorm.embedLink}
            allowFullScreen
            title={`${dorm.title} 3D tour`}
          />
        ) : (
          <div className="dorm__tour-fallback">
            <img src={dorm.picture} alt={dorm.title} />
            <span className="dorm__tour-fallback-tag">3D tour coming soon</span>
          </div>
        )}
      </section>

      <main className="dorm__main">
        <section className="dorm__section">
          <h2 className="dorm__section-title">About this hall</h2>
          <p className="dorm__description">{dorm.description}</p>
        </section>

        <section className="dorm__section">
          <h2 className="dorm__section-title">What students get</h2>
          <ul className="dorm__features">
            {dorm.features.map((feature, i) => (
              <li key={i}>
                <AiOutlineCheck />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="dorm__section">
          <h2 className="dorm__section-title">Room dimensions</h2>
          <div className="dorm__dimensions">
            <div className="dorm__dimensions-info">
              <div className="dorm__dimensions-block">
                <span className="dorm__dimensions-label">Room size</span>
                <strong>{dorm.dimensions}</strong>
              </div>
              <div className="dorm__dimensions-block">
                <span className="dorm__dimensions-label">Furniture</span>
                <ul>
                  {dorm.furnitureDimensions.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="dorm__dimensions-img">
              <img src={dorm.layout} alt={`${dorm.title} layout`} />
            </div>
          </div>
        </section>

        {hasTestimonials && (
          <section className="dorm__section dorm__testimonials-section">
            <h2 className="dorm__section-title">From students who lived here</h2>
            <div className="dorm__testimonial">
              <ImQuotesLeft className="dorm__testimonial-quote-icon" />
              <p className="dorm__testimonial-quote">{testimonial.quote}</p>
              <div className="dorm__testimonial-meta">
                <img src={testimonial.avatar} alt={testimonial.studentName} />
                <div>
                  <strong>{testimonial.studentName}</strong>
                  <span>{testimonial.grade}</span>
                </div>
              </div>
              {dorm.testimonials.length > 1 && (
                <div className="dorm__testimonial-controls">
                  <button onClick={prev} aria-label="Previous testimonial">
                    <AiFillLeftCircle />
                  </button>
                  <span>
                    {index + 1} / {dorm.testimonials.length}
                  </span>
                  <button onClick={next} aria-label="Next testimonial">
                    <AiFillRightCircle />
                  </button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dorm;
