import campisiLayout from "../../images/dorm_images/layouts/campisi_layout.jpg";
import casaLayout from "../../images/dorm_images/layouts/casa_layout.jpg";
import dunneLayout from "../../images/dorm_images/layouts/dunne_layout.jpg";
import finnLayout from "../../images/dorm_images/layouts/finn_layout.png";
import flipLayout from "../../images/dorm_images/layouts/flip_layout.jpg";
import grahamLayout from "../../images/dorm_images/layouts/graham_layout.png";
import mcwalshLayout from "../../images/dorm_images/layouts/mcwalsh_layout.jpg";
import nobiliLayout from "../../images/dorm_images/layouts/nobili_layout.jpg";
import sobratoLayout from "../../images/dorm_images/layouts/sobrato_layout.jpg";
import swigLayout from "../../images/dorm_images/layouts/swig_layout.jpg";
import villasLayout from "../../images/dorm_images/layouts/villas_layout.jpg";

import campisi from "../../images/dorm_images/pics/campisi.jpg";
import casa from "../../images/dorm_images/pics/casa.jpg";
import dunne from "../../images/dorm_images/pics/dunne.jpg";
import finn from "../../images/dorm_images/pics/finn.jpg";
import flip from "../../images/dorm_images/pics/flip.jpg";
import graham from "../../images/dorm_images/pics/graham.jpg";
import mcwalsh from "../../images/dorm_images/pics/mcwalsh.jpg";
import nobili from "../../images/additional_housing_images/nobili.jpg";
import sobrato from "../../images/dorm_images/pics/sobrato.jpg";
import swig from "../../images/dorm_images/pics/swig.jpg";
import villas from "../../images/additional_housing_images/villas.jpg";

import kian from "../../images/avatars/kian.png";
import kian2 from "../../images/avatars/kian2.png";
import Liying from "../../images/avatars/Liying.jpeg";
import max from "../../images/avatars/max.png";
import katie from "../../images/avatars/katie.jpeg";
import collin from "../../images/avatars/collin.png";
import calley from "../../images/avatars/calley.png";
import john from "../../images/avatars/john.png";
import Inez from "../../images/avatars/Inez.jpeg";
import kinsey from "../../images/avatars/Kinsey.jpeg";
import nicole from "../../images/avatars/nicole.jpeg";
import jesus from "../../images/avatars/jesus.png";
import ethan from "../../images/avatars/ethan.png";

const DormData = [
  {
    name: "campisi-hall",
    title: "Campisi Hall",
    address: "Adjacent to the Malley Fitness Center",
    description:
      "Campisi Residence Hall, home of the Communitas RLC, was built in reaction to a tripling of the student population in the 1960s. A large garden area with barbeques is adjacent to Sanfilippo Residence Hall. A complete renovation of the individual student rooms occurred in 2007, including upgrades to the personal vanities.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: campisiLayout,
    dimensions: "18'L x 12.5'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser Dimensions: 30"L x 24"W x 30"H',
      'Desk: 42"L x 23"W x 30"H',
      'Chair: 35"H x 16"D x 18"W',
      'Armoire: 35"W x 24"D x 72"H',
      'Vanity: 73"W x 25"D x 34"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "https://my.treedis.com/tour/campisi-lobby",
    picture: campisi,
    testimonials: [
      {
        studentName: "Liying Liang",
        quote: "I like that it’s quiet so you can study in the dorm",
        grade: "Freshman",
        avatar: Liying,
      },
      {
        studentName: "Katie Mahoney",
        quote:
          "Campisi is kinda quiet, but it’s a good area to be in and the lounge is super nice and if you find your people it’s pretty fun",
        grade: "Freshman",
        avatar: katie,
      },
      {
        studentName: "Collin Paiz",
        quote:
          "Even though it's quiet, if you want to find something to do and hang out with people you can",
        grade: "Sophomore",
        avatar: collin,
      },
    ],
  },
  {
    name: "casa-hall",
    title: "Casa Italiana Hall",
    address: "Between Bellomy Field and Sobrato Residence Hall",
    description: "This is the description for Casa Hall.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: casaLayout,
    dimensions: "16'L x 9.5'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 41"W x 37"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 26"L x 23"W x 30"H',
      'Individual Drawer Unit: 26"L x 23"W x 10"H',
      'Desk: 42"L x 24"W x 30"H',
      'Chair: 35"H x 18"W x 16"D',
      'Closet: 54"W x 24"D x 65"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "",
    picture: casa,
    testimonials: [
      {
        studentName: "Kian Malakooti",
        quote:
          "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian,
      },
      {
        studentName: "Matthew Gates",
        quote:
          "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian2,
      },
    ],
  },
  {
    name: "dunne-hall",
    title: "Dunne Hall",
    address: "Located on the northwest tip of campus",
    description:
      "The Dunne Residence Hall is home to the Modern Perspectives Residential Learning Community. It was opened to accommodate Santa Clara University's growing student population and has coed floors for first-year and sophomore students. Outer amenities include a large community space in the basement, lounges on every floor, a sand volleyball court located adjacent to the building and ample lawn space on the Kennedy mall.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: dunneLayout,
    dimensions: "20'L x 12'W",
    furnitureDimensions: [
      'Bed Frame: 84.5"L x 40.5"W x 36"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser Dimensions: 24"L x 30"W x 30"H',
      'Desk: 42"L x 25"W x 30"H',
      'Chair: 35"H x 16"D x 18"W',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "",
    picture: dunne,
    testimonials: [
      {
        studentName: "Kian Malakooti",
        quote:
          "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian,
      },
      {
        studentName: "Matthew Gates",
        quote:
          "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian2,
      },
    ],
  },
  {
    name: "finn-hall",
    title: "Finn Hall",
    address: "Located across the street from Safeway.",
    description:
      "Finn is a four-story, Y-Shaped building with three wings. Residents live in mini-suites, with a shared toilet and shower area, and a sink and vanity in each double room. Approximately 30 residents live on each of the twelve wings, with one Community Facilitator on each wing. At the center of each of the four floors, a large, open kitchen and lounge area serves as the primary communal space. A different gaming table is located in this area on each floor. Each wing has a small lounge area and glass-walled study space. There are also laundry rooms located near the central lounge on each of the four floors. On the first floor, a large multi-purpose room serves as a community-wide gathering space and classroom. In the space directly outside of the building, a gas grill area and patio seating are available to Finn residents. Each resident living in a Finn mini-suite double is provided a twin XL bed frame and mattress, desk, rolling desk cabinet, desk chair, and set of three stacking dresser drawers. Two shared spaces not pictured include the closet and vanity with sink, cabinet, and drawers.",
    bedCount: "2-3",
    sinks: 1,
    occupancy: "2-3",
    layout: finnLayout,
    dimensions: "20'L x 13.85' / 24.5'L x 14'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser Dimensions: 26"L x 24"W x 30"H',
      'Individual Stackable Dreser Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 92"H x 24.5"D x 54.5W',
      'Vanity: 82"L x 23"W x 33.5"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "https://my.treedis.com/tour/finn-lobby",
    picture: finn,
    testimonials: [
      {
        studentName: "Calley Lwin",
        quote: "Very nice living conditions considering it's a dorm",
        grade: "Freshman",
        avatar: calley,
      },
      {
        studentName: "John Oran",
        quote:
          "It's quiet and not as social as other dorms which is perfect for someone like me!",
        grade: "Freshman",
        avatar: john,
      },
    ],
  },
  {
    name: "graham-hall",
    title: "Graham Hall",
    address: "Located in the central part of campus",
    description:
      "Graham Hall is the home of the Alpha Residential Learning Community. This four-story building houses approximately 350 undergraduate residents. Graham Hall is made up of four neighborhoods, A-D, that are comprised of community lounge, kitchen and laundry room for the convenience of the residents. The rooms are designed as mini-suites with a set of roommates sharing an adjoining bathroom with another set of suitemates. The Graham courtyard also offers residents two barbecue and picnic areas as well as plenty of space to enjoy other outdoor activities.",
    bedCount: "1-3",
    sinks: 1,
    occupancy: "1-3",
    layout: grahamLayout,
    dimensions: "23.5'L x 16'W / 21'L x 16'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser Dimensions: 26"L x 24"W x 30"H',
      'Individual Stackable Dreser Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 56"W x 22.5"D x 72"H',
      'Vanity: 43"W x 23"D x 34"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "https://my.treedis.com/tour/graham-lobby",
    picture: graham,
    testimonials: [
      {
        studentName: "Inez Low",
        quote:
          "I liked how it was quiet but if you wanted to socialize we could go somewhere else. also not having communal bathrooms was great",
        grade: "Freshman",
        avatar: Inez,
      },
      {
        studentName: "Kinsey",
        quote:
          "Having a dorm with non communal bathrooms is amazing and it’s the perfect balance of quiet yet still social",
        grade: "Sophomore",
        avatar: kinsey,
      },
      {
        studentName: "Jesus",
        quote:
          "It has a great location, being in the middle of the gym, the dining hall, and the library!",
        grade: "Freshman",
        avatar: jesus,
      },
    ],
  },
  {
    name: "mcwalsh-hall",
    title: "McLaughlin-Walsh Hall",
    address: "Located on west side of campus adjacent to the Kennedy Mall",
    description:
      "McLaughlin Residence Hall, along with Walsh Residence Hall, are home to the Unity Residential Learning Community. These three-story buildings are near identical in layout and offer similar accommodations. Each building is co-ed and features large rooms with in-room vanities and sinks. The adjacent outdoor amenities include a sand volleyball court and ample green space on Kennedy Mall for activities such as throwing around a frisbee or enjoying the sunshine.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: mcwalshLayout,
    dimensions: "20'L x 10.5'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 26"L x 24"W x 30"H',
      'Individual Drawer Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 37"W x 36"D x 74"H',
      'Vanity: 43"W x 23"D x 34"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "",
    picture: mcwalsh,
    testimonials: [
      {
        studentName: "Kian Malakooti",
        quote:
          "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian,
      },
      {
        studentName: "Matthew Gates",
        quote:
          "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian2,
      },
    ],
  },
  {
    name: "nobili-hall",
    title: "Nobili Hall",
    address: "",
    description: "This is the description for Dunne Hall.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: nobiliLayout,
    dimensions: "Room Sizes Vary",
    furnitureDimensions: [
      'Bed Frame: 85"L x 41"W x 37"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 30"L x 24"W x 30"H',
      'Desk: 42"L x 24"W x 30"H',
      'Chair: 35"H x 16"D x 18"W',
      "Closet: Vary by Room",
      "Vanity: Vary by Room",
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "",
    picture: nobili,
    testimonials: [
      {
        studentName: "Kian Malakooti",
        quote:
          "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian,
      },
      {
        studentName: "Matthew Gates",
        quote:
          "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian2,
      },
    ],
  },
  {
    name: "sanfillipo-hall",
    title: "Sanfillipo Hall",
    address: "",
    description: "This is the description for Sanfillipo Hall.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: flipLayout,
    dimensions: "18'L x 12'W",
    furnitureDimensions: [
      'Bed Frame: 90"L x 40"W x 36"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser Dimensions: 30"L x 24"W x 30"H',
      'Desk: 26"L x 28"W x 40"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 68"W x 24"D x 71"H',
      'Vanity: 45"W x 24"D x 34"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "",
    picture: flip,
    testimonials: [
      {
        studentName: "Kian Malakooti",
        quote:
          "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian,
      },
      {
        studentName: "Matthew Gates",
        quote:
          "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian2,
      },
    ],
  },
  {
    name: "sobrato-hall",
    title: "Sobrato Hall",
    address: "",
    description: "This is the description for Sobrato Hall.",
    bedCount: "6-10",
    sinks: 4,
    occupancy: "6-10",
    layout: sobratoLayout,
    dimensions: "Single Room: 11.5' x 9', Double Room: 12.5' x 11.5'",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 30"L x 24"W x 30"H',
      'Individual Drawer Unit: 30"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 56"W x 22.5"D x 72"H',
      'Vanity: 43"W x 23"D x 34"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "",
    picture: sobrato,
    testimonials: [
      {
        studentName: "Kian Malakooti",
        quote:
          "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian,
      },
      {
        studentName: "Matthew Gates",
        quote:
          "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian2,
      },
    ],
  },
  {
    name: "swig-hall",
    title: "Swig Hall",
    address: "",
    description: "This is the description for Swig Hall.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: swigLayout,
    dimensions: "15'L x 12'W",
    furnitureDimensions: [
      'Bed Frame: 84.5"L x 40.5"W x 36"H',
      'Under Bed Max Height: 30"H',
      'Dresser Dimensions: 26"L x 24"W x 30"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Armoire: 56"H x 35.5"W x 23"D',
      'Vanity: 59"W x 21"D x 34"H',
      'Mattress Dimensions: 80"L x 38"W x 7.5"H',
    ],
    amenities:
      "Air conditioning, laundry facilities, study lounge, sky lounge, dance room, art room",
    embedLink: "https://my.treedis.com/tour/swig-lobby",
    picture: swig,
    testimonials: [
      {
        studentName: "Max Schiff",
        quote: "Everyone was very social, the view from my room was very nice",
        grade: "Junior",
        avatar: max,
      },
      {
        studentName: "Nicole Robison",
        quote: "It was social--great for freshman year, but ONLY freshman year",
        grade: "Freshman",
        avatar: nicole,
      },
      {
        studentName: "Ethan Lagasse",
        quote:
          "There were so many people so close by! Made it easy to meet and make friends",
        grade: "Freshman",
        avatar: ethan,
      },
    ],
  },
  {
    name: "villas",
    title: "University Villas",
    address: "",
    description: "This is the description for Villas.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: villasLayout,
    dimensions: "Room Dimension: 12.5'L x 11'W",
    furnitureDimensions: [
      'Bed Frame: 80.5"L x 55.5"W x 37"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 26"L x 24"W x 30"H',
      'Individual Drawer Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Mattress Dimensions: 75"L x 54" x 7.25"H',
    ],
    amenities: "Air conditioning, laundry facilities, study lounge",
    embedLink: "",
    picture: villas,
    testimonials: [
      {
        studentName: "Kian Malakooti",
        quote:
          "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian,
      },
      {
        studentName: "Matthew Gates",
        quote:
          "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
        grade: "Senior",
        avatar: kian2,
      },
    ],
  },
];

export { DormData };
