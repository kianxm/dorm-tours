import React from 'react'
import './HeroSection.css'
import '../../App.css'
import heroVideo from '../../videos/hero-video.mp4'
import { Button } from '../Button/Button';

function HeroSection() {
    return (
        <div className="hero-container">
          <video src={heroVideo} autoPlay loop muted />
            <h1>Dorms Reimagined</h1>
            <p>View a tour</p>
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