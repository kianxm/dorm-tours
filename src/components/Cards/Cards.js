import React from 'react'
import { CardItem } from './CardItem'
import './Cards.css'
import campisiLayout from '../../images/dorm_images/campisi_layout.jpg'
import casaLayout from '../../images/dorm_images/casa_layout.jpg'
import dunneLayout from '../../images/dorm_images/dunne_layout.jpg'
import finnLayout from '../../images/dorm_images/finn_layout.png'
import flipLayout from '../../images/dorm_images/flip_layout.jpg'
import grahamLayout from '../../images/dorm_images/graham_layout.png'
import mcwalshLayout from '../../images/dorm_images/mcwalsh_layout.jpg'
import sobratoLayout from '../../images/dorm_images/sobrato_layout.jpg'
import swigLayout from '../../images/dorm_images/swig_layout.jpg'
import villasLayout from '../../images/dorm_images/villas_layout.jpg'
import villas from '../../images/additional_housing_images/villas.jpg'
import nobili from '../../images/additional_housing_images/nobili.jpg'
import neighborhood from '../../images/additional_housing_images/neighborhood.jpg'
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
                        src={campisiLayout}
                        text='Campisi Hall'
                        label='Quiet'
                        path='/home'
                    />
                    <CardItem 
                        src={casaLayout}
                        text='Casa-Italiana Hall'
                        label='Comfortable'
                        path='/home'
                    />
                    <CardItem 
                        src={dunneLayout}
                        text='Dunne Hall'
                        label='Lively'
                        path='/home'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                        src={finnLayout}
                        text='Finn Hall'
                        label='Spacious'
                        path='/home'
                    />
                    <CardItem 
                        src={flipLayout}
                        text='Sanfillipo Hall'
                        label='Relaxed'
                        path='/home'
                    />
                    <CardItem 
                        src={grahamLayout}
                        text='Graham Hall'
                        label='Well-rounded'
                        path='/home'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src={mcwalshLayout}
                        text='McWalsh Hall'
                        label='Cozy'
                        path='/home'
                    />
                    <CardItem 
                        src={sobratoLayout}
                        text='Sobrato Hall'
                        label='Studious'
                        path='/home'
                    />
                    <CardItem 
                        src={swigLayout}
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