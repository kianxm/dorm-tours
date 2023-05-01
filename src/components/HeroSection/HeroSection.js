import React from 'react'
import './HeroSection.css'
import '../../App.css'
// import heroVideo from '../../videos/hero-video.mp4'
import { Button } from '../Button/Button';
import swig from '../../images/dorm_images/pics/swig.jpg'

function HeroSection() {
    return (
        <div className="hero-container">
          {/* <video src={heroVideo} autoPlay loop muted /> */}
          <img className='hero-image' src={swig} alt='Swig'/>
            <h1>Discover Your Dream Dorm Today</h1>
            <p>Explore our top-rated dorms and find the perfect place to call home during your college years.<br/>With state-of-the-art amenities and a prime location on campus,<br/>you won't want to live anywhere else.</p>
            <div className='hero-btns'>
              <Button 
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              >
                GET STARTED
              </Button>
            </div>
        </div>
      );
}

export default HeroSection;