import campisiLayout from '../../images/dorm_images/layouts/campisi_layout.jpg'
import casaLayout from '../../images/dorm_images/layouts/casa_layout.jpg'
import dunneLayout from '../../images/dorm_images/layouts/dunne_layout.jpg'
import finnLayout from '../../images/dorm_images/layouts/finn_layout.png'
import flipLayout from '../../images/dorm_images/layouts/flip_layout.jpg'
import grahamLayout from '../../images/dorm_images/layouts/graham_layout.png'
import mcwalshLayout from '../../images/dorm_images/layouts/mcwalsh_layout.jpg'
import nobiliLayout from '../../images/dorm_images/layouts/nobili_layout.jpg'
import sobratoLayout from '../../images/dorm_images/layouts/sobrato_layout.jpg'
import swigLayout from '../../images/dorm_images/layouts/swig_layout.jpg'
import villasLayout from '../../images/dorm_images/layouts/villas_layout.jpg'

import campisi from '../../images/dorm_images/pics/campisi.jpg'
import casa from '../../images/dorm_images/pics/casa.jpg'
import dunne from '../../images/dorm_images/pics/dunne.jpg'
import finn from '../../images/dorm_images/pics/finn.jpg'
import flip from '../../images/dorm_images/pics/flip.jpg'
import graham from '../../images/dorm_images/pics/graham.jpg'
import mcwalsh from '../../images/dorm_images/pics/mcwalsh.jpg'
import nobili from '../../images/additional_housing_images/nobili.jpg'
import sobrato from '../../images/dorm_images/pics/sobrato.jpg'
import swig from '../../images/dorm_images/pics/swig.jpg'
import villas from '../../images/additional_housing_images/villas.jpg'

import kian from '../../images/avatars/kian.png'
import kian2 from '../../images/avatars/kian2.png'
import Liying from '../../images/avatars/Liying.jpeg'
import max from '../../images/avatars/max.png'
import katie from '../../images/avatars/katie.jpeg'
import collin from '../../images/avatars/collin.png'
import calley from '../../images/avatars/calley.png'
import john from '../../images/avatars/john.png'
import Inez from '../../images/avatars/Inez.jpeg'
import kinsey from '../../images/avatars/Kinsey.jpeg'
import nicole from '../../images/avatars/nicole.jpeg'
import jesus from '../../images/avatars/jesus.png'
import ethan from '../../images/avatars/ethan.png'

const DormData = [
    {
        name: 'campisi-hall',
        title: 'Campisi Hall',
        address: 'Salvador V. Campisi Residence Hall, Santa Clara, CA 95053',
        description: 'This is the description for Campisi Hall.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: campisiLayout,
        dimensions: "18'L x 12.5'W",
        furnitureDimensions: 
            [
                'Bed Frame: 85"L x 40.5"W x 36"H',
                'Mattress Dimensions: 80"L x 38"W x 7.5"H',
                'Under Bed Max Height: 30"H',
                'Dresser Dimensions: 30"L x 24"W x 30"H',
                'Desk: 42"L x 23"W x 30"H',
                'Chair: 35"H x 16"D x 18"W',
                'Armoire: 35"W x 24"D x 72"H',
                'Vanity: 73"W x 25"D x 34"H'
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: 'https://my.treedis.com/tour/campisi-lobby',
        picture: campisi,
        testimonials: [{
            studentName: 'Liying Liang',
            quote: "I like that it’s quiet so you can study in the dorm",
            grade: 'Freshman',
            avatar: Liying
        },
        {
            studentName: 'Katie Mahoney',
            quote: "Campisi is kinda quiet, but it’s a good area to be in and the lounge is super nice and if you find your people it’s pretty fun",
            grade: 'Freshman',
            avatar: katie
        },
        {
            studentName: 'Collin Paiz',
            quote: "Even though it's quiet, if you want to find something to do and hang out with people you can",
            grade: 'Sophomore',
            avatar: collin
        }]
    },
    {
        name: 'casa-hall',
        title: 'Casa Italiana Hall',
        address: '',
        description: 'This is the description for Casa Hall.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: casaLayout,
        dimensions: "16'L x 9.5'W",
        furnitureDimensions: 
            [
                'Bed Frame: 85"L x 41"W x 37"H',
                'Mattress Dimensions: 80"L x 38"W x 7.5"H',
                'Under Bed Max Height: 30"H',
                'Dresser / 3 Stack Drawer Units: 26"L x 23"W x 30"H',
                'Individual Drawer Unit: 26"L x 23"W x 10"H',
                'Desk: 42"L x 24"W x 30"H',
                'Chair: 35"H x 18"W x 16"D',
                'Closet: 54"W x 24"D x 65"H',
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: '',
        picture: casa,
        testimonials: [{
            studentName: 'Kian Malakooti',
            quote: "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian
        },
        {
            studentName: 'Matthew Gates',
            quote: "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian2
        }]
    },
    {
        name: 'dunne-hall',
        title: 'Dunne Hall',
        address: '',
        description: 'This is the description for Dunne Hall.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: dunneLayout,
        dimensions: "20'L x 12'W",
        furnitureDimensions: 
            [
                'Bed Frame: 84.5"L x 40.5"W x 36"H',
                'Mattress Dimensions: 80"L x 38"W x 7.5"H',
                'Under Bed Max Height: 30"H',
                'Dresser Dimensions: 24"L x 30"W x 30"H',
                'Desk: 42"L x 25"W x 30"H',
                'Chair: 35"H x 16"D x 18"W',
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: '',
        picture: dunne,
        testimonials: [{
            studentName: 'Kian Malakooti',
            quote: "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian
        },
        {
            studentName: 'Matthew Gates',
            quote: "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian2
        }]
    },
    {
        name: 'finn-hall',
        title: 'Finn Hall',
        address: '',
        description: 'This is the description for Finn Hall.',
        bedCount: '2-3',
        sinks: 1,
        occupancy: '2-3',
        layout: finnLayout,
        dimensions: "20'L x 13.85' / 24.5'L x 14'W",
        furnitureDimensions: 
            [
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
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: 'https://my.treedis.com/tour/finn-lobby',
        picture: finn,
        testimonials: [{
            studentName: 'Calley Lwin',
            quote: "Very nice living conditions considering it's a dorm",
            grade: 'Freshman',
            avatar: calley
        },
        {
            studentName: 'John Oran',
            quote: "It's quiet and not as social as other dorms which is perfect for someone like me!",
            grade: 'Freshman',
            avatar: john
        }]
    },
    {
        name: 'graham-hall',
        title: 'Graham Hall',
        address: '',
        description: 'This is the description for Graham Hall.',
        bedCount: '1-3',
        sinks: 1,
        occupancy: '1-3',
        layout: grahamLayout,
        dimensions: "23.5'L x 16'W / 21'L x 16'W",
        furnitureDimensions: 
            [
                'Bed Frame: 85"L x 40.5"W x 36"H',
                'Mattress Dimensions: 80"L x 38"W x 7.5"H',
                'Under Bed Max Height: 30"H',
                'Dresser Dimensions: 26"L x 24"W x 30"H',
                'Individual Stackable Dreser Unit: 26"L x 24"W x 10"H',
                'Desk: 42"L x 24"W x 31"H',
                'Chair: 35"H x 19"D x 18"W',
                'Closet: 56"W x 22.5"D x 72"H',
                'Vanity: 43"W x 23"D x 34"H'
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: 'https://my.treedis.com/tour/graham-dorm-room-1',
        picture: graham,
        testimonials: [{
            studentName: 'Inez Low',
            quote: "I liked how it was quiet but if you wanted to socialize we could go somewhere else. also not having communal bathrooms was great",
            grade: 'Freshman',
            avatar: Inez
        },
        {
            studentName: 'Kinsey',
            quote: "Having a dorm with non communal bathrooms is amazing and it’s the perfect balance of quiet yet still social",
            grade: 'Sophomore',
            avatar: kinsey
        },
        {
            studentName: 'Jesus',
            quote: "It has a great location, being in the middle of the gym, the dining hall, and the library!",
            grade: 'Freshman',
            avatar: jesus
        }]
    },
    {
        name: 'mcwalsh-hall',
        title: 'McLaughlin-Walsh Hall',
        address: '',
        description: 'This is the description for McWalsh Hall.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: mcwalshLayout,
        dimensions: "20'L x 10.5'W",
        furnitureDimensions: 
            [
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
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: '',
        picture: mcwalsh,
        testimonials: [{
            studentName: 'Kian Malakooti',
            quote: "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian
        },
        {
            studentName: 'Matthew Gates',
            quote: "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian2
        }]
    },
    {
        name: 'nobili-hall',
        title: 'Nobili Hall',
        address: '',
        description: 'This is the description for Dunne Hall.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: nobiliLayout,
        dimensions: "Room Sizes Vary",
        furnitureDimensions: 
            [
                'Bed Frame: 85"L x 41"W x 37"H',
                'Mattress Dimensions: 80"L x 38"W x 7.5"H',
                'Under Bed Max Height: 30"H',
                'Dresser: 30"L x 24"W x 30"H',
                'Desk: 42"L x 24"W x 30"H',
                'Chair: 35"H x 16"D x 18"W',
                'Closet: Vary by Room',
                'Vanity: Vary by Room',
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: '',
        picture: nobili,
        testimonials: [{
            studentName: 'Kian Malakooti',
            quote: "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian
        },
        {
            studentName: 'Matthew Gates',
            quote: "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian2
        }]
    },
    {
        name: 'sanfillipo-hall',
        title: 'Sanfillipo Hall',
        address: '',
        description: 'This is the description for Sanfillipo Hall.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: flipLayout,
        dimensions: "18'L x 12'W",
        furnitureDimensions: 
            [
                'Bed Frame: 90"L x 40"W x 36"H',
                'Mattress Dimensions: 80"L x 38"W x 7.5"H',
                'Under Bed Max Height: 30"H',
                'Dresser Dimensions: 30"L x 24"W x 30"H',
                'Desk: 26"L x 28"W x 40"H',
                'Chair: 35"H x 19"D x 18"W',
                'Closet: 68"W x 24"D x 71"H',
                'Vanity: 45"W x 24"D x 34"H',
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: '',
        picture: flip,
        testimonials: [{
            studentName: 'Kian Malakooti',
            quote: "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian
        },
        {
            studentName: 'Matthew Gates',
            quote: "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian2
        }]
    },
    {
        name: 'sobrato-hall',
        title: 'Sobrato Hall',
        address: '',
        description: 'This is the description for Sobrato Hall.',
        bedCount: '6-10',
        sinks: 4,
        occupancy: '6-10',
        layout: sobratoLayout,
        dimensions: "Single Room: 11.5' x 9', Double Room: 12.5' x 11.5'",
        furnitureDimensions: 
            [
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
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: '',
        picture: sobrato,
        testimonials: [{
            studentName: 'Kian Malakooti',
            quote: "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian
        },
        {
            studentName: 'Matthew Gates',
            quote: "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian2
        }]
    },
    {
        name: 'swig-hall',
        title: 'Swig Hall',
        address: '',
        description: 'This is the description for Swig Hall.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: swigLayout,
        dimensions: "15'L x 12'W",
        furnitureDimensions: 
            [
                'Bed Frame: 84.5"L x 40.5"W x 36"H',
                'Under Bed Max Height: 30"H',
                'Dresser Dimensions: 26"L x 24"W x 30"H',
                'Desk: 42"L x 24"W x 31"H',
                'Chair: 35"H x 19"D x 18"W',
                'Armoire: 56"H x 35.5"W x 23"D',
                'Vanity: 59"W x 21"D x 34"H',
                'Mattress Dimensions: 80"L x 38"W x 7.5"H',
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge, sky lounge, dance room, art room',
        embedLink: 'https://my.treedis.com/tour/swig-dorm-room',
        picture: swig,
        testimonials: [{
            studentName: 'Max Schiff',
            quote: "Everyone was very social, the view from my room was very nice",
            grade: 'Junior',
            avatar: max
        },
        {
            studentName: 'Nicole Robison',
            quote: "It was social--great for freshman year, but ONLY freshman year",
            grade: 'Freshman',
            avatar: nicole
        },
        {
            studentName: 'Ethan Lagasse',
            quote: "There were so many people so close by! Made it easy to meet and make friends",
            grade: 'Freshman',
            avatar: ethan
        }]
    },
    {
        name: 'villas',
        title: 'University Villas',
        address: '',
        description: 'This is the description for Villas.',
        bedCount: 2,
        sinks: 1,
        occupancy: 2,
        layout: villasLayout,
        dimensions: "Room Dimension: 12.5'L x 11'W",
        furnitureDimensions: 
            [
                'Bed Frame: 80.5"L x 55.5"W x 37"H',
                'Under Bed Max Height: 30"H',
                'Dresser / 3 Stack Drawer Units: 26"L x 24"W x 30"H',
                'Individual Drawer Unit: 26"L x 24"W x 10"H',
                'Desk: 42"L x 24"W x 31"H',
                'Chair: 35"H x 19"D x 18"W',
                'Mattress Dimensions: 75"L x 54" x 7.25"H',
            ],
        amenities: 'Air conditioning, laundry facilities, study lounge',
        embedLink: '',
        picture: villas,
        testimonials: [{
            studentName: 'Kian Malakooti',
            quote: "This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian
        },
        {
            studentName: 'Matthew Gates',
            quote: "(2) This is my testimonial quote. The dorm is very quiet but it's great for someone like me!",
            grade: 'Senior',
            avatar: kian2
        }]
    },
];

export { DormData }