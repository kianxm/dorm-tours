import React from "react";
import { CardItem } from "./CardItem";
import "./Cards.css";
import { Fade } from "react-reveal";

// On-campus Dorms
import campisi from "../../images/dorm_images/pics/campisi.jpg";
import casa from "../../images/dorm_images/pics/casa.jpg";
import dunne from "../../images/dorm_images/pics/dunne.jpg";
import finn from "../../images/dorm_images/pics/finn.jpg";
import flip from "../../images/dorm_images/pics/flip.jpg";
import graham from "../../images/dorm_images/pics/graham.jpg";
import mcwalsh from "../../images/dorm_images/pics/mcwalsh.jpg";
import sobrato from "../../images/dorm_images/pics/sobrato.jpg";
import swig from "../../images/dorm_images/pics/swig.jpg";

// Additional Housing Dorms
import villas from "../../images/additional_housing_images/villas.jpg";
import nobili from "../../images/additional_housing_images/nobili.jpg";
import neighborhood from "../../images/additional_housing_images/neighborhood.jpg";

// Graduate & Law Housing
import bellarmine from "../../images/graduate_housing_images/bellarmine.jpg";
import parkavenue from "../../images/graduate_housing_images/parkavenue.jpg";
import stclare from "../../images/graduate_housing_images/stclare.jpg";

const Cards = () => {
  return (
    <div className="cards" id="dorms">
      <h1>On-campus Dorms</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Fade top distance="10%">
            <ul className="cards__items">
              <CardItem
                src={campisi}
                text="Campisi Hall"
                label="Quiet"
                path="/dorms/campisi-hall"
              />
              <CardItem
                src={casa}
                text="Casa-Italiana Hall"
                label="Comfortable"
                path="/dorms/casa-hall"
              />
              <CardItem
                src={dunne}
                text="Dunne Hall"
                label="Lively"
                path="/dorms/dunne-hall"
              />
            </ul>
          </Fade>
          <Fade top distance="10%">
            <ul className="cards__items">
              <CardItem
                src={finn}
                text="Finn Hall"
                label="Spacious"
                path="/dorms/finn-hall"
              />
              <CardItem
                src={flip}
                text="Sanfillipo Hall"
                label="Relaxed"
                path="/dorms/sanfillipo-hall"
              />
              <CardItem
                src={graham}
                text="Graham Hall"
                label="Well-rounded"
                path="/dorms/graham-hall"
              />
            </ul>
          </Fade>
          <Fade top distance="10%">
            <ul className="cards__items">
              <CardItem
                src={mcwalsh}
                text="McLaughlin-Walsh Hall"
                label="Cozy"
                path="/dorms/mcwalsh-hall"
              />
              <CardItem
                src={sobrato}
                text="Sobrato Hall"
                label="Studious"
                path="/dorms/sobrato-hall"
              />
              <CardItem
                src={swig}
                text="Swig Hall"
                label="Active"
                path="/dorms/swig-hall"
              />
            </ul>
          </Fade>
        </div>
      </div>

      <Fade top distance="15%">
        <h1>Additional Housing</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="cards__items">
              <CardItem
                src={villas}
                text="University Villas"
                label="Upperclassmen"
                path="/dorms/villas"
              />
              <CardItem
                src={nobili}
                text="Nobili Hall"
                label="Quiet"
                path="/dorms/nobili-hall"
              />
              <CardItem
                src={neighborhood}
                text="Neighborhood Units"
                label="Upperclassmen"
                path="https://www.scu.edu/living/residential-living-options/additional-undergraduate-housing/neighborhood-units/"
              />
            </div>
          </div>
        </div>
      </Fade>

      <Fade top distance="15%">
        <h1>Graduate & Law Housing</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="cards__items">
              <CardItem
                src={bellarmine}
                text="Bellarmine Hall"
                label="Graduate"
                path="https://www.scu.edu/living/residential-living-options/graduate/graduate--law-living-options/bellarmine/"
              />
              <CardItem
                src={parkavenue}
                text="Park Avenue Apartments"
                label="Graduate"
                path="https://www.scu.edu/living/residential-living-options/graduate/graduate--law-living-options/park-avenue-apartments/"
              />
              <CardItem
                src={stclare}
                text="St. Clare Hall"
                label="Graduate"
                path="https://www.scu.edu/living/residential-living-options/graduate/graduate--law-living-options/st-clare-hall/"
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Cards;
