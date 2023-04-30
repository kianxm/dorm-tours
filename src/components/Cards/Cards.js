import React from 'react'
import { CardItem } from './CardItem'
import './Cards.css'

// On-campus Dorms
import campisiLayout from '../../images/dorm_images/layouts/campisi_layout.jpg'
import casaLayout from '../../images/dorm_images/layouts/casa_layout.jpg'
import dunneLayout from '../../images/dorm_images/layouts/dunne_layout.jpg'
import finnLayout from '../../images/dorm_images/layouts/finn_layout.png'
import flipLayout from '../../images/dorm_images/layouts/flip_layout.jpg'
import grahamLayout from '../../images/dorm_images/layouts/graham_layout.png'
import mcwalshLayout from '../../images/dorm_images/layouts/mcwalsh_layout.jpg'
import sobratoLayout from '../../images/dorm_images/layouts/sobrato_layout.jpg'
import swigLayout from '../../images/dorm_images/layouts/swig_layout.jpg'

import campisi from '../../images/dorm_images/pics/campisi.jpg'
import casa from '../../images/dorm_images/pics/casa.jpg'
import dunne from '../../images/dorm_images/pics/dunne.jpg'
import finn from '../../images/dorm_images/pics/finn.jpg'
import flip from '../../images/dorm_images/pics/flip.jpg'
import graham from '../../images/dorm_images/pics/graham.jpg'
import mcwalsh from '../../images/dorm_images/pics/mcwalsh.jpg'
import sobrato from '../../images/dorm_images/pics/sobrato.jpg'
import swig from '../../images/dorm_images/pics/swig.jpg'

// Additional Housing Dorms
import villasLayout from '../../images/dorm_images/layouts/villas_layout.jpg'
import villas from '../../images/additional_housing_images/villas.jpg'
import nobili from '../../images/additional_housing_images/nobili.jpg'
import neighborhood from '../../images/additional_housing_images/neighborhood.jpg'

// Graduate & Law Housing
import bellarmine from '../../images/graduate_housing_images/bellarmine.jpg'
import parkavenue from '../../images/graduate_housing_images/parkavenue.jpg'
import stclare from '../../images/graduate_housing_images/stclare.jpg'

const Cards = () => {
  return (
    <div className='cards'>
        <h1>On-campus Dorms</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src={campisi}
                        text='Campisi Hall'
                        label='Quiet'
                        path='/home'
                    />
                    <CardItem 
                        src={casa}
                        text='Casa-Italiana Hall'
                        label='Comfortable'
                        path='/home'
                    />
                    <CardItem 
                        src={dunne}
                        text='Dunne Hall'
                        label='Lively'
                        path='/home'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                        src={finn}
                        text='Finn Hall'
                        label='Spacious'
                        path='/home'
                    />
                    <CardItem 
                        src={flip}
                        text='Sanfillipo Hall'
                        label='Relaxed'
                        path='/home'
                    />
                    <CardItem 
                        src={graham}
                        text='Graham Hall'
                        label='Well-rounded'
                        path='/home'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src={mcwalsh}
                        text='McLaughlin-Walsh Hall'
                        label='Cozy'
                        path='/home'
                    />
                    <CardItem 
                        src={sobrato}
                        text='Sobrato Hall'
                        label='Studious'
                        path='/home'
                    />
                    <CardItem 
                        src={swig}
                        text='Swig Hall'
                        label='Active'
                        path='/home'
                    />
                </ul>
                
                
            </div>
        </div>
        <h1>Additional Housing</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <div className='cards__items'>
                    <CardItem 
                        src={villas}
                        text='University Villas'
                        label='Upperclassmen'
                        path='/home'
                    />
                    <CardItem 
                        src={nobili}
                        text='Nobili Hall'
                        label='Quiet'
                        path='/home'
                    />
                    <CardItem 
                        src={neighborhood}
                        text='Neighborhood Units'
                        label='Upperclassmen'
                        path='/home'
                    />
                </div>
            </div>
        </div>

        <h1>Graduate & Law Housing</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <div className='cards__items'>
                    <CardItem 
                        src={bellarmine}
                        text='Bellarmine Hall'
                        label='Upperclassmen'
                        path='/home'
                    />
                    <CardItem 
                        src={parkavenue}
                        text='Park Avenue Apartments'
                        label='Upperclassmen'
                        path='/home'
                    />
                    <CardItem 
                        src={stclare}
                        text='St. Clare Hall'
                        label='Upperclassmen'
                        path='/home'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards