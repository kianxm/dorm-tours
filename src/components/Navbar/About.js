import React from "react";
import "./About.css";
import kian from "../../images/avatars/kian.png";
import matty from "../../images/avatars/matty.jpeg";
import eva from "../../images/avatars/eva.png";

const About = () => {
  return (
    <div className="about-container">
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
          <li>Professor John Smith for his guidance and feedback throughout the project.</li>
          <li>The staff at Santa Clara University for providing us with the resources and support we needed.</li>
          <li>Our friends and families for their encouragement and support.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
