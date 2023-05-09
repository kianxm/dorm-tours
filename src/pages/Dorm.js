import React, { Component } from "react";
import "./Dorm.css";
import { useParams } from "react-router-dom";
import { DormData } from "../components/Dorms/DormsData";
import { useState } from "react";

import { FaBed, FaSink } from "react-icons/fa";
import { BsFillPeopleFill, BsStars } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";
import {
  TbAirConditioning,
  TbParking,
  TbFileDescription,
} from "react-icons/tb";
import {
  AiOutlineWifi,
  AiFillLeftCircle,
  AiFillRightCircle,
  AiFillStar,
} from "react-icons/ai";
import {
  MdOutlineLocalLaundryService,
  MdSoupKitchen,
  MdOutlineDescription,
} from "react-icons/md";
import { ImBooks, ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { RiStarSmileLine } from "react-icons/ri";

const Dorm = (props) => {
  const { name } = useParams();
  const dorm = DormData.find((dorm) => dorm.name === name);

  const [index, setIndex] = useState(0);
  const { studentName, quote, grade, avatar } = dorm.testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(dorm.testimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= dorm.testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <div className="dorm">
      <div className="dorm__container">
        {dorm.embedLink ? (
          <iframe className="dorm__tour" src={dorm.embedLink} allowFullScreen />
        ) : (
          <img className="dorm__picture" src={dorm.picture} alt="Dorm" />
        )}
        <div className="dorm__details">
          <h1> {dorm.title} </h1>
          <p> {dorm.address} </p>
          <div className="dorm__specifics">
            <div className="dorm__specifics__row">
              <FaBed /> {dorm.bedCount} beds
            </div>
            <div className="dorm__specifics__row">
              {dorm.sinks === 1 ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaSink style={{ marginRight: "8px" }} />
                  <span>1 sink</span>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaSink style={{ marginRight: "8px" }} />
                  <span>{dorm.sinks} sinks</span>
                </div>
              )}
            </div>
            <div className="dorm__specifics__row">
              <BsFillPeopleFill /> {dorm.occupancy} people
            </div>
          </div>
          <a
            className="dorm__pricing"
            href="https://www.scu.edu/living/residential-living-options/2022-2023-room--board-rates/"
            target="_blank"
          >
            View prices
          </a>
        </div>

        <div className="dorm__description__container">
          <h2 className="header__text">
            Description <TbFileDescription />
          </h2>
          <div className="dorm__description">{dorm.description}</div>
        </div>

        <h2 className="header__text">
          Characteristics <RiStarSmileLine />
        </h2>
        <div className="dorm__spec__features">
          <ul className="dorm__spec__features__list">
            {dorm.features.map((feature, index) => (
              <li key={index}>
                <AiFillStar className="star__svg" /> {feature}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="header__text">
          Dimensions <SlSizeFullscreen />
        </h2>
        <div className="dorm__dimensions__container">
          <div className="dorm__dimensions">
            <div className="dimensions__text">Room Dimensions:</div>
            <div className="dimensions__room__dimensions">
              {dorm.dimensions}
            </div>
            <div className="dimensions__text">Furniture Dimensions:</div>
            <ul>
              {dorm.furnitureDimensions.map((dimension, index) => (
                <li key={index}>{dimension}</li>
              ))}
            </ul>
          </div>
          <div className="dorm__layout">
            <img src={dorm.layout}></img>
          </div>
        </div>

        <div className="dorm__features">
          <h2 className="header__text">
            Features <BsStars />
          </h2>
          <div className="dorm__features__container">
            <div className="dorm__features__row1">
              <div>
                <TbAirConditioning /> Cooling depends on dorm
              </div>
              <div>
                <AiOutlineWifi /> High-speed internet
              </div>
              <div>
                <MdOutlineLocalLaundryService /> Laundry room inside
              </div>
            </div>
            <div className="dorm__features__row2">
              <div>
                <TbParking /> Roadside & lot parking
              </div>
              <div>
                <MdSoupKitchen /> Shared kitchen
              </div>
              <div>
                <ImBooks /> Study rooms & areas
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonials">
        <div className="container testimonials__container">
          <h2 className="testimonials__head">
            <ImQuotesLeft /> Testimonials <ImQuotesRight />
          </h2>
          <div className="testimonial">
            <div className="testimonial__avatar">
              <img src={avatar} alt={studentName} />
            </div>
            <p className="testimonial__quote">{`"${quote}"`}</p>
            <h5 className="testimonal__student__name">{studentName}</h5>
            <small className="testimonial__title">{grade}</small>
          </div>
          <div className="testimonials__btn-container">
            <button
              className="testimonials__btn"
              onClick={prevTestimonialHandler}
            >
              <AiFillLeftCircle />
            </button>
            <button
              className="testimonials__btn"
              onClick={nextTestimonialHandler}
            >
              <AiFillRightCircle />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

class DormWithScroll extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <Dorm {...this.props} />;
  }
}

export default DormWithScroll;
