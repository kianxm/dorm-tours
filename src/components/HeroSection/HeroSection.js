import React from 'react'
import './HeroSection.css'
import heroVideo from '../../videos/hero-video.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
          <video src={heroVideo} autoPlay loop muted />
            <h1>Dorms Reimagined</h1>
            <p>View a tour</p>
            <div className='hero-btns'>
      </div>
        </div>
      );
}

export default HeroSection;