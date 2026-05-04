import React from "react";
import "./About.css";
import Reveal from "../Reveal/Reveal";

import kian from "../../images/avatars/kianprofessional.jpg";
import matty from "../../images/avatars/matty.jpeg";
import eva from "../../images/avatars/eva.png";

const team = [
  {
    name: "Eva Stenberg",
    role: "Computer Science & Engineering",
    img: eva,
  },
  {
    name: "Kian Malakooti",
    role: "Computer Science & Engineering",
    img: kian,
  },
  {
    name: "Matthew Gates",
    role: "Computer Science & Engineering",
    img: matty,
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <Reveal as="header" className="about__header">
          <span className="about__eyebrow">About the project</span>
          <h2 className="about__title">
            Built by SCU seniors, for the next generation of Broncos.
          </h2>
          <p className="about__lede">
            We're three senior computer engineering students at Santa Clara
            University. We built these immersive tours so incoming students can
            explore campus housing — and the community inside each hall —
            without ever needing to step on campus.
          </p>
        </Reveal>

        <div className="about__team">
          {team.map((member, i) => (
            <Reveal key={member.name} className="about__member" delay={i + 1}>
              <div className="about__avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <h3 className="about__name">{member.name}</h3>
              <p className="about__role">{member.role}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="about__credits">
          <h3>Acknowledgements</h3>
          <p>
            Thank you to our faculty advisor <strong>Dr. Kai Lukoff</strong> for
            his guidance through human-centered design methods, our partnering
            HCI teams (the SAR and Storytelling teams), <strong>Luke Ponssen</strong>,
            and — most importantly — our families and friends for four
            unforgettable years at Santa Clara.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
