import React from "react";
import { Fade } from "react-reveal";
import logo from "../../images/matterportlogo.png";
import dollhouse from "../../images/dollhouse.png";
import "./Matterport.css";

const Matterport = () => {
  return (
    <div className="matterport" id="matterport">
      <div className="matterport__container">
        <img src={logo} alt="Matterport Logo"></img>
        <Fade top distance="10%">
          <h1>Powered by Matterport</h1>
          <p>
            Using Matterport's LiDAR 3D cameras, we were able to capture the
            sociality of dorm rooms and <br />
            showcase them to prospective students and parents. Matterport is a
            leading provider <br /> of 3D scanning technology that enabled us to
            create immersive and interactive experiences of <br />
            physical spaces. With Matterport's technology, we were able to
            provide potential residents <br /> with a more realistic and
            comprehensive representation of the dorm rooms, which can help{" "}
            <br /> them make more informed decisions before moving in.
          </p>
          <img className="dollhouse" src={dollhouse} alt="Dollhouse"></img>
        </Fade>
      </div>
    </div>
  );
};

export default Matterport;
