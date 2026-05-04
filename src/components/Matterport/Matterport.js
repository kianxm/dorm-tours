import React from "react";
import dollhouse from "../../images/dollhouse.png";
import Reveal from "../Reveal/Reveal";
import "./Matterport.css";

const features = [
  {
    title: "LiDAR-grade 3D capture",
    body: "Every space scanned with sub-millimeter precision so you experience the room exactly as it is.",
  },
  {
    title: "Walk anywhere, look anywhere",
    body: "Step through the entire dorm — the lounge, the bathroom, even the view from the window — at your own pace.",
  },
  {
    title: "Dollhouse & floorplan views",
    body: "Toggle to a top-down floorplan or a doll-house cutaway to understand the layout instantly.",
  },
];

const Matterport = () => {
  return (
    <section className="mp" id="matterport">
      <div className="mp__container">
        <Reveal className="mp__copy">
          <span className="mp__eyebrow">The technology</span>
          <h2 className="mp__title">
            Immersive scans, captured with{" "}
            <span className="mp__title-accent">Matterport</span> technology.
          </h2>
          <p className="mp__lede">
            Using LiDAR-equipped 3D cameras, every dorm has been mapped into an
            interactive walk-through. Future Broncos can explore the rooms,
            common areas, and the social feel of a hall before ever setting
            foot on campus.
          </p>

          <ul className="mp__features">
            {features.map((f, i) => (
              <Reveal key={f.title} as="li" delay={i + 1}>
                <span className="mp__feature-num">0{i + 1}</span>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mp__visual" delay={2}>
          <div className="mp__glow" aria-hidden="true" />
          <img className="mp__dollhouse" src={dollhouse} alt="3D dollhouse view of a dorm scan" />
        </Reveal>
      </div>
    </section>
  );
};

export default Matterport;
