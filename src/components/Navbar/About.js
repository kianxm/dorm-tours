import React from "react";
import "./About.css";
import kian from "../../images/avatars/kian.png";
import matty from "../../images/avatars/matty.jpeg";
import eva from "../../images/avatars/eva.png";

const About = () => {
  return (
    <div className="about-container" id="about-page">
      <h1 className="about-header">About Us</h1>
      <p className="about-description">
        We are three senior computer engineering students at Santa Clara
        University who created virtual reality tours for incoming students. Our
        goal was to provide a way for students to explore the campus and learn about the sociality of each housing option without
        having to physically visit the university.
      </p>
      <h3 className="about-subheader">Meet the Team</h3>
      <div className="team-container">
        <div className="team-member">
          <img src={eva} alt="Student 1" className="team-member-img" />
          <h4 className="team-member-name">Eva Stenberg</h4>
          <p className="team-member-major">Computer Science and Engineering</p>
        </div>
        <div className="team-member">
          <img src={kian} alt="Student 2" className="team-member-img" />
          <h4 className="team-member-name">Kian Malakooti</h4>
          <p className="team-member-major">Computer Science and Engineering</p>
        </div>
        <div className="team-member">
          <img src={matty} alt="Student 3" className="team-member-img" />
          <h4 className="team-member-name">Matthew Gates</h4>
          <p className="team-member-major">Computer Science and Engineering</p>
        </div>
      </div>
      <div className="acknowledgments" style={{ marginTop: "300px" }}>
        <h3 className="acknowledgements-header">Acknowledgements</h3>
        <p>We would like to thank the following people for their help and support in creating this project:</p>
        <ul>
            <li>Our faculty advisor Dr. Kai Lukoff for helping us bring this project to life using his knowledge of human centered design
          methods in research and design to guide us through the complexities and milestones throughout the quarter, our partnering HCI teams, the SAR Team and Storytelling team whose own participation contributed to our project, Luke Ponssen, and most importantly, our families and friends that have supported us in our four years at Santa Clara University and without which we would not be where we are today. Thank you!</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
