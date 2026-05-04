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
    address: "East side of campus, across from Malley Fitness Center",
    description:
      "Campisi is a three-story, L-shaped building with two wings, located on the east side of campus, directly across from Malley Fitness Center. Rooms are traditional doubles with a vanity and sink in each space, and communal restrooms on each floor. Approximately 65 students live on each of the three floors, with a Community Facilitator on each wing. Amenities include floor lounges, a communal basement space, balconies, a communal kitchen, laundry rooms, and air conditioning in both individual rooms and common spaces. The quad between Campisi and Sanfilippo halls has charcoal grills, picnic benches, and a large grassy area.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: campisiLayout,
    dimensions: "18'L x 12.5'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 30"L x 24"W x 30"H',
      'Desk: 42"L x 23"W x 30"H',
      'Chair: 35"H x 16"D x 18"W',
      'Armoire: 35"W x 24"D x 72"H',
      'Vanity: 73"W x 25"D x 34"H',
    ],
    embedLink: "https://my.treedis.com/tour/campisi-lobby",
    picture: campisi,
    features: [
      "Traditional double rooms for first- and second-year students",
      "Communal restrooms on each floor",
      "In-room vanity & sink",
      "Air conditioning in rooms and common spaces",
      "Floor lounges, basement community space, and balconies",
      "Communal kitchen and laundry rooms",
      "Magis Residential Learning Community",
      "Quad with grills and picnic benches",
    ],
    testimonials: [
      {
        studentName: "Liying Liang",
        quote: "I like that it's quiet so you can study in the dorm.",
        grade: "Freshman",
        avatar: Liying,
      },
      {
        studentName: "Katie Mahoney",
        quote:
          "Campisi is on the quieter side, but the area is great and the lounge is super nice. If you find your people, it's a lot of fun.",
        grade: "Freshman",
        avatar: katie,
      },
      {
        studentName: "Collin Paiz",
        quote:
          "Even though it's quiet, if you want to find something to do and hang out with people, you can.",
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
      "Casa Italiana is a co-ed residence hall housing approximately 380 first- and second-year students across two sections: Casa Vintage and Casa Modern. Casa Vintage offers traditional-style single rooms with community bathrooms (no air conditioning). Casa Modern features suite-style apartments with four bedrooms, two bathrooms, and a shared kitchen or living room — with air conditioning. Communal spaces include a common room, fully-equipped kitchen, 4th-floor terrace, commuter lounge, three classrooms, and lounges with TVs, billiards, ping pong, foosball, and pianos. The courtyard offers outdoor seating, charcoal barbecues, and a bocce ball court.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: casaLayout,
    dimensions: "16'L x 9.5'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 41"W x 37"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 26"L x 23"W x 30"H',
      'Individual Drawer Unit: 26"L x 23"W x 10"H',
      'Desk: 42"L x 24"W x 30"H',
      'Chair: 35"H x 18"W x 16"D',
      'Closet: 54"W x 24"D x 65"H',
    ],
    embedLink: "",
    picture: casa,
    features: [
      "Suite- & apartment-style community for first- and second-year students",
      "Small groups share two restrooms and communal spaces",
      "Casa Modern: suites with A/C, kitchen, and living room",
      "Casa Vintage: singles with community bathrooms, no A/C",
      "Common room, full kitchen, and 4th-floor terrace",
      "Lounges with billiards, ping pong, foosball, and pianos",
      "Bocce ball court and courtyard with charcoal grills",
      "da Vinci Residential Learning Community",
    ],
    testimonials: [],
  },
  {
    name: "dunne-hall",
    title: "Dunne Hall",
    address: "Northwest end of campus, on Kennedy Mall",
    description:
      "Dunne Residence Hall is home to the Modern Perspectives Residential Learning Community. It was opened to accommodate Santa Clara University's growing student population and has co-ed floors for first-year and sophomore students. Outer amenities include a large community space in the basement, lounges on every floor, a sand volleyball court adjacent to the building, and ample lawn space on Kennedy Mall.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: dunneLayout,
    dimensions: "20'L x 12'W",
    furnitureDimensions: [
      'Bed Frame: 84.5"L x 40.5"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 24"L x 30"W x 30"H',
      'Desk: 42"L x 25"W x 30"H',
      'Chair: 35"H x 16"D x 18"W',
    ],
    embedLink: "",
    picture: dunne,
    features: [
      "Traditional double rooms for first- and second-year students",
      "Communal restrooms on each floor",
      "Co-ed floors with active social community",
      "Large basement community space and floor lounges",
      "Adjacent sand volleyball court",
      "Lawn space on Kennedy Mall",
      "Modern Perspectives Residential Learning Community",
      "Located next to Swig Hall",
    ],
    testimonials: [],
  },
  {
    name: "finn-hall",
    title: "Finn Hall",
    address: "West side of campus, across from Safeway",
    description:
      "Finn is a four-story, Y-shaped building with three wings, located across the street from Safeway. Residents live in mini-suites — two rooms share a restroom with separate toilet and shower spaces — and each double has an in-room vanity and sink. Approximately 30 residents live on each of the twelve wings, with a Community Facilitator on each wing. At the center of each floor, an open kitchen and lounge area serves as the primary communal space, with a different gaming table on each floor. Each wing has a small lounge and glass-walled study space. Finn has air conditioning in both communal spaces and individual rooms. A large multi-purpose room serves as a community gathering space and classroom on the first floor, and outside, a gas grill area and patio seating are available to residents.",
    bedCount: "2-3",
    sinks: 1,
    occupancy: "2-3",
    layout: finnLayout,
    dimensions: "20'L x 13.85' / 24.5'L x 14'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 26"L x 24"W x 30"H',
      'Stackable Dresser Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 92"H x 24.5"D x 54.5"W',
      'Vanity: 82"L x 23"W x 33.5"H',
    ],
    embedLink: "https://my.treedis.com/tour/finn-lobby",
    picture: finn,
    features: [
      "Mini-suite style for first- and second-year students",
      "Two rooms share a restroom with separate toilet and shower",
      "In-room vanity & sink in each double",
      "Air conditioning throughout",
      "Open kitchen and lounge with gaming tables on each floor",
      "Glass-walled study spaces and floor laundry",
      "Multi-purpose room and outdoor gas grill patio",
      "Cura Residential Learning Community",
    ],
    testimonials: [
      {
        studentName: "Calley Lwin",
        quote: "Very nice living conditions considering it's a dorm.",
        grade: "Freshman",
        avatar: calley,
      },
      {
        studentName: "John Oran",
        quote:
          "It's quiet and not as social as other dorms — perfect for someone like me.",
        grade: "Freshman",
        avatar: john,
      },
    ],
  },
  {
    name: "graham-hall",
    title: "Graham Hall",
    address: "Central campus",
    description:
      "Graham Hall is the home of the Alpha Residential Learning Community. This four-story building houses approximately 350 undergraduate residents. Graham is made up of four neighborhoods (A–D), each with a community lounge, kitchen, and laundry room. Rooms are designed as mini-suites — two rooms share an adjoining bathroom with another set of suitemates. The Graham courtyard offers two barbecue and picnic areas as well as plenty of space to enjoy other outdoor activities.",
    bedCount: "1-3",
    sinks: 1,
    occupancy: "1-3",
    layout: grahamLayout,
    dimensions: "23.5'L x 16'W / 21'L x 16'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 26"L x 24"W x 30"H',
      'Stackable Dresser Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 56"W x 22.5"D x 72"H',
      'Vanity: 43"W x 23"D x 34"H',
    ],
    embedLink: "https://my.treedis.com/tour/graham-lobby",
    picture: graham,
    features: [
      "Mini-suite style for first- and second-year students",
      "Two rooms share a restroom with separate toilet and shower",
      "Four neighborhoods (A–D), each with lounge, kitchen, and laundry",
      "Spacious rooms with adjoining suite bathrooms",
      "Air conditioning throughout",
      "Courtyard with two BBQ and picnic areas",
      "Central location near gym, dining, and library",
      "Alpha Residential Learning Community",
    ],
    testimonials: [
      {
        studentName: "Inez Low",
        quote:
          "I liked how it was quiet, but if you wanted to socialize you could go elsewhere. Not having communal bathrooms was great!",
        grade: "Freshman",
        avatar: Inez,
      },
      {
        studentName: "Kinsey",
        quote:
          "Having a dorm with non-communal bathrooms is amazing, and it's the perfect balance of quiet yet still social.",
        grade: "Sophomore",
        avatar: kinsey,
      },
      {
        studentName: "Jesus",
        quote:
          "It has a great location — right between the gym, the dining hall, and the library!",
        grade: "Freshman",
        avatar: jesus,
      },
    ],
  },
  {
    name: "mcwalsh-hall",
    title: "McLaughlin–Walsh Hall",
    address: "West side of campus, adjacent to Kennedy Mall",
    description:
      "McLaughlin and Walsh Residence Halls are home to the Unity Residential Learning Community. These three-story buildings are nearly identical in layout and offer similar accommodations. Each building is co-ed and features large rooms with in-room vanities and sinks. Adjacent outdoor amenities include a sand volleyball court and ample green space on Kennedy Mall for activities like throwing a frisbee or enjoying the sunshine.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: mcwalshLayout,
    dimensions: "20'L x 10.5'W",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 26"L x 24"W x 30"H',
      'Individual Drawer Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 37"W x 36"D x 74"H',
      'Vanity: 43"W x 23"D x 34"H',
    ],
    embedLink: "",
    picture: mcwalsh,
    features: [
      "Traditional double rooms for first- and second-year students",
      "Communal restrooms on each floor",
      "In-room vanity & sink",
      "Adjacent sand volleyball court",
      "Steps from Kennedy Mall green space",
      "Close to Benson Memorial Center dining",
      "Unity Residential Learning Community",
    ],
    testimonials: [],
  },
  {
    name: "nobili-hall",
    title: "Nobili Hall",
    address: "Central campus, overlooking the Mission Gardens",
    description:
      "Nobili Residence Hall is dedicated to Rev. John Nobili, S.J., the first president of Santa Clara University. Originally home to dining rooms, professors, and upperclassmen, it served solely as the residence for Jesuit priests on campus from the 1970s. In 2006, the Jesuits moved out and Nobili reopened for juniors and seniors. The building features large single, double, and triple rooms with private in-room bathrooms — and sweeping views of the Mission Gardens.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: nobiliLayout,
    dimensions: "Room sizes vary",
    furnitureDimensions: [
      'Bed Frame: 85"L x 41"W x 37"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 30"L x 24"W x 30"H',
      'Desk: 42"L x 24"W x 30"H',
      'Chair: 35"H x 16"D x 18"W',
      "Closet: Varies by room",
      "Vanity: Varies by room",
    ],
    embedLink: "",
    picture: nobili,
    features: [
      "Ensuite-style hall for second-year and upperclass students",
      "Each room features a private restroom",
      "Large singles, doubles, and triples available",
      "Sweeping views of the Mission Gardens",
      "Historic building — SCU's original residence",
      "Quiet community focused on study",
    ],
    testimonials: [],
  },
  {
    name: "sanfillipo-hall",
    title: "Sanfilippo Hall",
    address: "East side of campus, adjacent to Cowell Health Center",
    description:
      "Sanfilippo Hall is a three-story, L-shaped building with two wings, located on the east side of campus adjacent to Cowell Health Center. Rooms are traditional doubles with a vanity and sink in each space, and communal restrooms on each floor. Approximately 65 students live on each of the three floors, with a Community Facilitator on each wing. Amenities include floor lounges, a communal basement space, balconies, a communal kitchen, and laundry rooms. Sanfilippo does not have air conditioning. The quad between Campisi and Sanfilippo halls has charcoal grills, picnic benches, and a large grassy area for student use.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: flipLayout,
    dimensions: "18'L x 12'W",
    furnitureDimensions: [
      'Bed Frame: 90"L x 40"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 30"L x 24"W x 30"H',
      'Desk: 26"L x 28"W x 40"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 68"W x 24"D x 71"H',
      'Vanity: 45"W x 24"D x 34"H',
    ],
    embedLink: "",
    picture: flip,
    features: [
      "Traditional double rooms for first- and second-year students",
      "Communal restrooms on each floor",
      "In-room vanity & sink",
      "No air conditioning",
      "Floor lounges, basement community space, and balconies",
      "Communal kitchen and laundry rooms",
      "Shared quad with Campisi (grills & picnic benches)",
      "Magis Residential Learning Community",
    ],
    testimonials: [],
  },
  {
    name: "sobrato-hall",
    title: "Sobrato Hall",
    address: "Central campus, near Bellomy Field",
    description:
      "Sobrato is a co-ed space that houses approximately 300 first- and second-year residents and offers a variety of living options. Sobrato's front building includes suites of four single rooms, one double room, two shared bathrooms, and a common area; the back building is configured as apartments with four single rooms, two bathrooms, a kitchen, and a common area. Sobrato has air conditioning in both common and individual spaces. Each floor has 30–60 residents, and regardless of living style, students will find a strong sense of community throughout the building. Community spaces include the Commons and community kitchen, the Den, and the Sobrato classrooms.",
    bedCount: "6-10",
    sinks: 4,
    occupancy: "6-10",
    layout: sobratoLayout,
    dimensions: "Single: 11.5' x 9'  /  Double: 12.5' x 11.5'",
    furnitureDimensions: [
      'Bed Frame: 85"L x 40.5"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 30"L x 24"W x 30"H',
      'Individual Drawer Unit: 30"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Closet: 56"W x 22.5"D x 72"H',
      'Vanity: 43"W x 23"D x 34"H',
    ],
    embedLink: "",
    picture: sobrato,
    features: [
      "Suite- & apartment-style community for first- and second-year students",
      "Small groups share two restrooms and communal spaces",
      "Apartment-side suites include a full kitchen",
      "Air conditioning throughout",
      "The Commons, the Den, and Sobrato classrooms",
      "Loyola Residential Learning Community",
    ],
    testimonials: [],
  },
  {
    name: "swig-hall",
    title: "Swig Hall",
    address: "Northwest end of campus, near Kennedy Mall",
    description:
      "Swig Hall is an eleven-story tower with ten residential floors, an 11th-floor sky lounge, and communal space in the basement. Rooms are traditional doubles with a vanity and sink in each space, and one male and one female communal restroom on each floor. Approximately 40 students live on each of the ten floors, with a Community Facilitator per floor. Communal kitchens are on several floors, and the basement features a large laundry room, dance studio, and music room. Swig does not have air conditioning. Each student is provided a twin XL bed frame and mattress, desk, rolling desk cabinet, desk chair, wardrobe, and a set of three stacking dresser drawers.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: swigLayout,
    dimensions: "15'L x 12'W",
    furnitureDimensions: [
      'Bed Frame: 84.5"L x 40.5"W x 36"H',
      'Mattress: 80"L x 38"W x 7.5"H',
      'Under Bed Max Height: 30"H',
      'Dresser: 26"L x 24"W x 30"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
      'Armoire: 56"H x 35.5"W x 23"D',
      'Vanity: 59"W x 21"D x 34"H',
    ],
    embedLink: "https://my.treedis.com/tour/swig-lobby",
    picture: swig,
    features: [
      "Traditional double rooms for first- and second-year students",
      "Communal restrooms by floor (no A/C)",
      "In-room vanity & sink",
      "11-story tower with sky lounge",
      "Communal kitchens on several floors",
      "Basement: large laundry, dance studio, and music room",
      "Highly social community — easy to make friends",
      "CyPhi Residential Learning Community",
    ],
    testimonials: [
      {
        studentName: "Max Shiff",
        quote:
          "Swig was great for meeting people, but not the place for studying. Do that in the library!",
        grade: "Junior",
        avatar: max,
      },
      {
        studentName: "Nicole Robison",
        quote:
          "As a quiet and introverted person, Swig was overwhelming for me — I wish I'd chosen a quieter dorm.",
        grade: "Freshman",
        avatar: nicole,
      },
      {
        studentName: "Ethan Lagasse",
        quote:
          "There were so many people close by, which made it easy to meet and make friends. It was great for freshman year — but only freshman year.",
        grade: "Freshman",
        avatar: ethan,
      },
    ],
  },
  {
    name: "villas",
    title: "University Villas",
    address: "Off-campus, gated community south of campus",
    description:
      "University Villas is a residential space for Santa Clara University junior and senior undergraduates. It features 138 townhouse units across 11 buildings. All townhouses are equipped with gourmet kitchens (granite counters, stainless appliances, cherry cabinets), full-sized beds, in-unit washers and dryers, and air conditioning. The gated community offers a secure parking lot, communal study space, an outdoor courtyard, a grassy volleyball area, grilling stations, and a multi-purpose room equipped with media services.",
    bedCount: 2,
    sinks: 1,
    occupancy: 2,
    layout: villasLayout,
    dimensions: "12.5'L x 11'W",
    furnitureDimensions: [
      'Bed Frame: 80.5"L x 55.5"W x 37"H',
      'Mattress: 75"L x 54"W x 7.25"H',
      'Under Bed Max Height: 30"H',
      'Dresser / 3 Stack Drawer Units: 26"L x 24"W x 30"H',
      'Individual Drawer Unit: 26"L x 24"W x 10"H',
      'Desk: 42"L x 24"W x 31"H',
      'Chair: 35"H x 19"D x 18"W',
    ],
    embedLink: "",
    picture: villas,
    features: [
      "Townhouse-style community for juniors and seniors",
      "138 fully-furnished units across 11 buildings",
      "Gourmet kitchens with granite counters and stainless appliances",
      "In-unit washer/dryer and air conditioning",
      "Gated community with secure parking",
      "Outdoor courtyard, volleyball area, and grilling stations",
      "Multi-purpose room with media services",
    ],
    testimonials: [],
  },
];

export { DormData };
