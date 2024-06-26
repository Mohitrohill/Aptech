import React, { useEffect, useRef, useState } from 'react';
import './HomeMenu.css';
import { Link } from 'react-router-dom';

function HomeMenu() {

    const [slideIndex, setSlideIndex] = useState(1);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);


  
    const slides = [
      "/Images/Slider/AL_ACCELERATE YOUR CAREER_Banner-01.jpg",
      "/Images/Slider/AL_7 Million Careers_Banner-01.jpg",
      "/Images/Slider/AL_Smart Professional Program - Banner-01.jpg",
      "/Images/Slider/Digital marketing Product_Banner-01.jpg",
      "/Images/Slider/Skill Builders_Banner 6 x 3.jpg",
      "/Images/Slider/Smart professional_Banner 6 x 3.jpg",
      "/Images/Slider/AL Future with New Age Banner-01.jpg",
      "/Images/Slider/AL_You Pursue Your Passion_Banner-01.jpg",
      "/Images/Slider/AL Banner-01.jpg",
      "/Images/Slider/AL_Add Extra_Banner-01.jpg",
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex(prevIndex => {
          let newIndex = prevIndex + 1;
          if (newIndex > slides.length) {
            newIndex = 1;
          }
          return newIndex;
        });
      }, 5000); // Change slide every 5 seconds
    
      return () => clearInterval(interval); // Clear interval on component unmount
    }, [slides.length]);
    
  
    const showDivs = (n) => {
      let newIndex = slideIndex + n;
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      setSlideIndex(newIndex);
    };
    
    const currentDiv = (n) => {
      setSlideIndex(n);
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };
    
    const handleTouchEnd = () => {
      if (touchStartX.current - touchEndX.current > 50) {
        showDivs(1); // Swipe left
      }
      if (touchStartX.current - touchEndX.current < -50) {
        showDivs(-1); // Swipe right
      }
    };
    
    
  
    return (
      <div className='home-menu-slide-container'>
      <div
      className="w3-content w3-display-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
        {slides.map((src, index) => (
          <img
            key={index}
            className="mySlides"
            src={src}
            alt=""
            style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
          />
        ))}
        <div className="w3-center w3-display-bottommiddle" style={{ width: '100%', height:'100%' }}>
          <i class="fa-solid fa-chevron-left" onClick={() => showDivs(-1)}></i>
          <i class="fa-solid fa-chevron-right" onClick={() => showDivs(1)}></i>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w3-badge demo w3-border ${slideIndex === index + 1 ? 'active' : ''}`}
              onClick={() => currentDiv(index + 1)}
            ></span>
          ))}
        </div>
      </div>

      <hr className='horizontal-line'/>

      <div className="menu-contact">
        <div className="menu-contact-location">
          <Link to='https://maps.app.goo.gl/Vn77mqPrtbTDU7HMA' target="_blank">
            <i className="fa-solid fa-location-dot menu-contact-icon "></i><br/>
            <div className='menu-address'>Our Location</div>
          </Link>
          <div className='menu-address-line '>
            <span className='menu-size'>Aptech Computer Education, 1<sup>st</sup> Floor, Opposite Radha Krishna Temple, Sector 66</span>
          </div>
        </div>

        <div className="menu-contact-phone">
          <Link>
            <i className="fa-solid fa-phone menu-contact-icon"></i><br />
            <span>Contact Us:</span>
          </Link>
          <div className='menu-address-note'>
            <span className='menu-size'>+91 99963</span>
          </div>
        </div>

        <div className="menu-contact-mic">
          <Link>
            <i class="fa-solid fa-microphone menu-contact-icon"></i>
            <span>Free Career Counselling</span>
          </Link>
          <div className='menu-address-note'>
            <span className='menu-size'>Your Trust Is Our Achievement</span>
          </div>
        </div>
      </div>
      </div>
    );
  };

export default HomeMenu
