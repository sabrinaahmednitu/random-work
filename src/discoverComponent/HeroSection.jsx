import React from 'react';
import './HeroSection.css';
import Frame14176 from '../assets/images/Frame 14176.png';
import Frame14178 from '../assets/images/Frame 14178.png';
import shapewave from '../assets/images/shape wave.png';
import spiral3 from '../assets/images/Spiral 3.png';
import ellips2 from '../assets/images/Ellipse 2.png';
import dawn from '../assets/images/Dawn.png';


const HeroSection = () => {
  return (
    <div className="container mx-auto main-container">
      <div className="content">
        <img className="Photo0" src={dawn} alt="Photo 2" />
        <div className="section first-section">
          <div className="first-column">
            <h1>
              Discover.
              <br />
              Explore.
              <br />
              Inspire.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. in libero risus semper
              habitant arcu eget.
            </p>
            <button className="explore-button">Explore</button>
          </div>
          <div className="second-column">
            <img src={shapewave} alt="Photo 1" />
          </div>
          <div className="third-column">
            <img className="Photo1" src={Frame14176} alt="Photo 1" />
            <img className="Photo2" src={Frame14176} alt="Photo 2" />
          </div>
        </div>
        {/* second section */}
        <div className="section second-section">
          <div className="first-column1">
            <img src={spiral3} alt="Photo 3" />
          </div>
          <div className="second-column1">
            <img className="Photo3" src={Frame14178} alt="Photo 1" />
          </div>
          <div className="third-column1">
            <img src={dawn} alt="" />
            <div className="profile">
              <img className="ellips" src={ellips2} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget.
              </p>
            </div>
          </div>
        </div>
        {/* second section */}
      </div>
    </div>
  );
};

export default HeroSection;
