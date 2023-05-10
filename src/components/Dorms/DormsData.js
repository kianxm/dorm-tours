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
import Liying from "../../images/avatars/Liying.jpeg";
import matty from "../../images/avatars/matty.jpeg";
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
      "Campisi is a three-story, L-Shaped building with two wings, located on the east side of campus, directly across from Malley Fitness Center. Rooms are traditional doubles with a vanity and sink in each space. Communal restrooms are on each floor. Approximately 65 students live on each of the three floors, with one Community Facilitator on each wing. Amenities available in the building include floor lounges, a communal basement space, balconies, a communal kitchen, laundry rooms and Air conditioning in both individual rooms and common spaces. The quad between Campisi and Sanfilippo halls has several charcoal grills, picnic benches, and a large grassy area for student use. Each student living in a Campisi standard double, is provided a twin XL bed frame and mattress, desk, desk cabinet, desk chair, and set of three stacking dresser drawers. Two shared spaces include the closet and vanity with sink, cabinet, and drawers.",
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
    features: [
      "Great Community",
      "Location",
      "Air-conditioning",
      "Great basement lounge area",
      "Very nice people",
      "Nice place to study",
      "Central to campus",
      "Quiet",
      "Not very social",
    ],
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
    description:
      "Casa Italiana Residence Hall is a co-ed residence hall that houses approximately 380 students and offers a variety of living options. Casa Italiana is composed of two sections: Casa Vintage and Casa Modern. Casa Vintage has traditional-style, single rooms with community bathrooms and no air conditioning. Casa Modern has suite-style apartments, which have four bedrooms, two bathrooms, and a kitchen or living room, and air conditioning. The larger communal spaces include a common room, fully-equipped kitchen, 4th-floor terrace, commuter lounge, three classrooms, and several lounges with TVs, billiards, ping pong tables, foosball tables, and pianos. A large courtyard provides outdoor seating, charcoal barbecues, and a bocce ball court.",
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
    features: [
      "Located near the gym/courts",
      "Air-conditioning",
      "Classes in the building",
      "Great place to study",
      "Quiet",
      "Not very social",
    ],
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
        avatar: matty,
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
    features: [
      "Great Community",
      "Location",
      "Social dorm",
      "Located next to Swig Hall",
    ],
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
        avatar: matty,
      },
    ],
  },
  {
    name: "finn-hall",
    title: "Finn Hall",
    address: "Located across the street from Safeway.",
    description:
      "Finn is a four-story, Y-Shaped building with three wings, located across the street from Safeway. Residents live in mini-suites, with a shared toilet and shower area, and a sink and vanity in each double room. Approximately 30 residents live on each of the twelve wings, with one Community Facilitator on each wing. At the center of each of the four floors, a large, open kitchen and lounge area serves as the primary communal space. A different gaming table is located in this area on each floor. Each wing has a small lounge area and glass-walled study space. There are also laundry rooms located near the central lounge on each of the four floors. Finn has air conditioning in both communal spaces and individual rooms. On the first floor, a large multi-purpose room serves as a community-wide gathering space and classroom. In the space directly outside of the building, a gas grill area and patio seating are available to Finn residents.",
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
    features: [
      "Very pacious",
      "Suite-style",
      "Great common rooms",
      "Modern living conditions",
      "Quiet",
    ],
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
    features: [
      "Close to classes",
      "Clean & modern",
      "Central location",
      "Spacious room",
      "Shared bathroom",
      "Air-conditioning",
      "Quiet but can find excitement",
    ],
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
    features: [
      "Very nice people",
      "Cozy dorm room size",
      "Central to campus",
      "Next to Benson cafeteria",
      "Quiet",
      "Not very social",
    ],
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
        avatar: matty,
      },
    ],
  },
  {
    name: "nobili-hall",
    title: "Nobili Hall",
    address: "",
    description:
      "Nobili Residence Hall is dedicated to Rev. John Nobili, S.J., the first President of Santa Clara University. Nobili originally housed dining rooms, professors, and upperclassmen but in the 1970s it eventually solely became the home of Jesuit priests on-campus. In the summer of 2006, the Jesuits moved out of Nobili and into their new residence, opening the residence hall for Juniors and Seniors. The building features large single, double, and triple rooms with private in-room bathrooms as well as sweeping views of the Mission Gardens.",
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
    features: [
      "Older building",
      "Mostly upperclassmen",
      "Nice place to study",
      "Quiet",
      "Not very social",
    ],
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
        avatar: matty,
      },
    ],
  },
  {
    name: "sanfillipo-hall",
    title: "Sanfillipo Hall",
    address: "",
    description:
      "Sanfilippo Hall is a three-story, L-shaped building with two wings, located on the east side of campus, adjacent to Cowell Health Center. Rooms are traditional doubles with a vanity and sink in each space. Communal restrooms are on each floor. Approximately 65 students live on each of the three floors, with one Community Facilitator on each wing. Amenities available in the building include floor lounges, a communal basement space, balconies, a communal kitchen, and laundry rooms. Sanfilippo does not have air conditioning. The quad between Campisi and Sanfilippo halls has several charcoal grills, picnic benches, and a large grassy area for student use. Each student living in a Sanfilippo standard double is provided a twin XL bed frame and mattress, desk, desk cabinet, desk chair, and set of three stacking dresser drawers.",
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
    features: [
      "No Air-conditioning",
      "Adjacent to Graham and Sobrato Hall",
      "Social dorm",
      "Older building",
    ],
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
        avatar: matty,
      },
    ],
  },
  {
    name: "sobrato-hall",
    title: "Sobrato Hall",
    address: "",
    description:
      "Sobrato is a four-year, co-ed space that houses approximately 300 residents, and offers a variety of living options. Sobrato's front building includes suites of four single rooms, one double room, two shared bathrooms and one common area; while Sobrato's back building is apartments made up of four single rooms, two bathrooms, a kitchen and a common area. Sobrato has air conditioning in both common and indivdual spaces throughout the hall. Each floor has 30-60 residents, and regardless of their living style, students will find a sense of community throughout the building. Sobrato's community spaces include the Commons and community kitchen, the Den, and the Sobrato classrooms.",
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
    features: [
      "Suite style for 6+ people",
      "Classrooms inside",
      "Air-conditioning",
      "Kitchen in each suite",
      "Very nice people",
      "Nice place to study",
      "Quiet",
      "Not very social",
    ],
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
        avatar: matty,
      },
    ],
  },
  {
    name: "swig-hall",
    title: "Swig Hall",
    address: "",
    description:
      "Swig Hall is an eleven-story tower with ten residential floors, an 11th-floor lounge, and communal space in the basement. Rooms are traditional doubles with a vanity and sink in each space. Communal restrooms, one male and one female, are on each floor. Approximately 40 students live on each of the ten floors, with one Community Facilitator per floor. There are communal kitchens on several floors in the building, and a large laundry room is located in the basement. The basement has additional communal spaces, including a dance studio and music room. Swig does not have air conditioning. Each student living in a Swig Hall standard double is provided a twin XL bed frame and mattress, desk, rolling desk cabinet, desk chair, wardrobe, and set of three stacking dresser drawers.",
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
    features: [
      "Very social",
      "Easy to meet people",
      "Outgoing",
      "Good location",
      "Great for freshman year",
      "Easy to make friends",
    ],
    testimonials: [
      {
        studentName: "Max Shiff",
        quote:
          "Swig was great for meeting people, but not the place for studying. Do that in the library!!",
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
    description:
      "The University Villas Residence Hall is a residential space for Santa Clara University junior and senior undergraduate students. This residence hall features 138 townhouse units across 11 building units. All the townhouses are equipped with gourmet kitchens that feature granite counters, stainless appliances, and cherry cabinets. The apartments are fully furnished and include full-sized beds for students. Each townhouse is also equipped with air conditioning and an in-unit washer and dryer. Additionally, this gated community offers a secure parking lot, communal study space, an outdoor courtyard, a grassy area for volleyball games, numerous grilling stations, and a multi-purpose room equipped with media services.",
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
    features: [
      "Located off-campus",
      "Mostly upperclassmen",
      "Apartment style",
      "Quiet",
      "Not very social",
    ],
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
        avatar: matty,
      },
    ],
  },
];

export { DormData };
