import React, { Component } from 'react'
import './Dorm.css'
import { useParams } from 'react-router-dom';
import { DormData } from '../components/Dorms/DormsData';

import { FaBed, FaSink} from 'react-icons/fa'
import { BsFillPeopleFill, BsStars } from 'react-icons/bs'
import { SlSizeFullscreen } from 'react-icons/sl'
import { TbAirConditioning } from 'react-icons/tb'

const Dorm = (props) => {
  const { name } = useParams();
  const dorm = DormData.find(dorm => dorm.name === name);

  return (
    <div className='dorm'>
      <div className='dorm__container'>
        {dorm.embedLink ?
          <iframe className='dorm__tour' src={dorm.embedLink} allowFullScreen />
          :
          <img className='dorm__picture' src={dorm.picture} alt='Dorm' />
        }
        <div className='dorm__details'>
          <h1> {dorm.title} </h1>
          <p> {dorm.address} </p>
          <div className='dorm__specifics'>
            <div className='dorm__specifics__row'>
              <FaBed/> {dorm.bedCount} beds
            </div>
            <div className='dorm__specifics__row'>
              {dorm.sinks === 1 ?
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaSink style={{ marginRight: '8px' }} />
                <span>1 sink</span>
              </div>
              :
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaSink style={{ marginRight: '8px' }} />
                <span>{dorm.sinks} sinks</span>
              </div>
              }
            </div>
            <div className='dorm__specifics__row'>
              <BsFillPeopleFill/> {dorm.occupancy} people
            </div>
          </div>
        </div>

        <h2 className='header__text'>Dimensions <SlSizeFullscreen/></h2>
        <div className='dorm__dimensions__container'>
          <div className='dorm__dimensions'>
            <div className='dimensions__text'>
              Room Dimensions:
            </div>
            <div>
              {dorm.dimensions}
            </div>
            <div className='dimensions__text'>
              Furniture Dimensions:
            </div>
            <ul>
              {dorm.furnitureDimensions.map((dimension, index) => (
                <li key={index}>{dimension}</li>
              ))}
            </ul>
          </div>
          <div className='dorm__layout'>
            <img src={dorm.layout}></img>
          </div>
        </div>

        <div className='dorm__features'>
          <h2 className='header__text'>Features <BsStars/></h2>
          <div className='dorm__features__container'>
              <div className='dorm__features__row1'>
                <div><TbAirConditioning/> Air-conditioned cooling & heating</div>
                <div>test</div>
                <div>test</div>
              </div>
              <div className='dorm__features__row2'>
                <div>test</div>
                <div>test</div>
                <div>test</div>
              </div>
          </div>
        </div>

        <h2 className='dorm__testimonials'>
          Testimonials
        </h2>

      </div>
    </div>
  )
}

class DormWithScroll extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <Dorm {...this.props} />;
  }
}


export default DormWithScroll;