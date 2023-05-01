import campisiLayout from '../../images/dorm_images/layouts/campisi_layout.jpg'
import casaLayout from '../../images/dorm_images/layouts/casa_layout.jpg'
import dunneLayout from '../../images/dorm_images/layouts/dunne_layout.jpg'
import finnLayout from '../../images/dorm_images/layouts/finn_layout.png'
import flipLayout from '../../images/dorm_images/layouts/flip_layout.jpg'
import grahamLayout from '../../images/dorm_images/layouts/graham_layout.png'
import mcwalshLayout from '../../images/dorm_images/layouts/mcwalsh_layout.jpg'
import sobratoLayout from '../../images/dorm_images/layouts/sobrato_layout.jpg'
import swigLayout from '../../images/dorm_images/layouts/swig_layout.jpg'

const DormData = [
    {
        name: 'campisi-hall',
        title: 'Campisi Hall',
        address: 'Salvador V. Campisi Residence Hall, Santa Clara, CA 95053',
        description: 'This is the description for Campisi Hall.',
        bedCount: 2,
        bathroom: 1,
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
        embedLink: 'https://my.treedis.com/tour/campisi-lobby'
    },
    {
        name: 'graham-hall',
        title: 'Graham Hall',
        description: 'This is the description for Graham Hall.',
        images: ['graham-1.jpg', 'graham-2.jpg', 'graham-3.jpg'],
        location: 'East campus',
        roomTypes: 'Singles, doubles, triples',
        amenities: 'Air conditioning, laundry facilities, study lounge'
    }
];

export { DormData }