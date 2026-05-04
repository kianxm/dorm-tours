import React from "react";
import { CardItem } from "./CardItem";
import Reveal from "../Reveal/Reveal";
import "./Cards.css";

import campisi from "../../images/dorm_images/pics/campisi.jpg";
import casa from "../../images/dorm_images/pics/casa.jpg";
import dunne from "../../images/dorm_images/pics/dunne.jpg";
import finn from "../../images/dorm_images/pics/finn.jpg";
import flip from "../../images/dorm_images/pics/flip.jpg";
import graham from "../../images/dorm_images/pics/graham.jpg";
import mcwalsh from "../../images/dorm_images/pics/mcwalsh.jpg";
import sobrato from "../../images/dorm_images/pics/sobrato.jpg";
import swig from "../../images/dorm_images/pics/swig.jpg";

import villas from "../../images/additional_housing_images/villas.jpg";
import nobili from "../../images/additional_housing_images/nobili.jpg";
import neighborhood from "../../images/additional_housing_images/neighborhood.jpg";

import bellarmine from "../../images/graduate_housing_images/bellarmine.jpg";
import parkavenue from "../../images/graduate_housing_images/parkavenue.jpg";
import stclare from "../../images/graduate_housing_images/stclare.jpg";

const onCampus = [
  { src: campisi, text: "Campisi Hall", label: "Quiet", path: "/dorms/campisi-hall" },
  { src: casa, text: "Casa Italiana Hall", label: "Comfortable", path: "/dorms/casa-hall" },
  { src: dunne, text: "Dunne Hall", label: "Lively", path: "/dorms/dunne-hall" },
  { src: finn, text: "Finn Hall", label: "Spacious", path: "/dorms/finn-hall" },
  { src: flip, text: "Sanfilippo Hall", label: "Relaxed", path: "/dorms/sanfillipo-hall" },
  { src: graham, text: "Graham Hall", label: "Well-rounded", path: "/dorms/graham-hall" },
  { src: mcwalsh, text: "McLaughlin–Walsh Hall", label: "Cozy", path: "/dorms/mcwalsh-hall" },
  { src: sobrato, text: "Sobrato Hall", label: "Studious", path: "/dorms/sobrato-hall" },
  { src: swig, text: "Swig Hall", label: "Active", path: "/dorms/swig-hall" },
];

const additional = [
  { src: villas, text: "University Villas", label: "Upperclassmen", path: "/dorms/villas" },
  { src: nobili, text: "Nobili Hall", label: "Quiet", path: "/dorms/nobili-hall" },
  {
    src: neighborhood,
    text: "Neighborhood Units",
    label: "Upperclassmen",
    path: "https://www.scu.edu/living/residential-living-options/additional-undergraduate-housing/neighborhood-units/",
  },
];

const graduate = [
  {
    src: bellarmine,
    text: "Bellarmine Hall",
    label: "Graduate",
    path: "https://www.scu.edu/living/residential-living-options/graduate/graduate--law-living-options/bellarmine/",
  },
  {
    src: parkavenue,
    text: "Park Avenue Apartments",
    label: "Graduate",
    path: "https://www.scu.edu/living/residential-living-options/graduate/graduate--law-living-options/park-avenue-apartments/",
  },
  {
    src: stclare,
    text: "St. Clare Hall",
    label: "Graduate",
    path: "https://www.scu.edu/living/residential-living-options/graduate/graduate--law-living-options/st-clare-hall/",
  },
];

const Section = ({ eyebrow, title, description, items }) => (
  <div className="cards__section">
    <Reveal as="header" className="cards__header">
      <span className="cards__eyebrow">{eyebrow}</span>
      <h2 className="cards__title">{title}</h2>
      {description && <p className="cards__description">{description}</p>}
    </Reveal>
    <div className="cards__grid">
      {items.map((item, i) => (
        <CardItem key={item.text} {...item} delay={(i % 3) + 1} />
      ))}
    </div>
  </div>
);

const Cards = () => {
  return (
    <section className="cards" id="dorms">
      <div className="cards__container">
        <Section
          eyebrow="01 — On Campus"
          title="On-campus residence halls"
          description="Step inside every freshman and sophomore dorm. Compare community styles, room layouts, and locations side by side."
          items={onCampus}
        />
        <Section
          eyebrow="02 — Upperclassmen"
          title="Additional undergraduate housing"
          description="Apartment-style living and quieter halls for juniors and seniors who want more independence."
          items={additional}
        />
        <Section
          eyebrow="03 — Graduate & Law"
          title="Graduate & law housing"
          description="Dedicated communities and apartments designed for graduate and law students."
          items={graduate}
        />
      </div>
    </section>
  );
};

export default Cards;
