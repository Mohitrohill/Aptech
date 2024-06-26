import React from 'react'
import './HomeAbout.css';
import Cards from './Cards';
import './Cards.css'

function HomeAbout() {
  return (
    <>
    <div className='cards'>
    
    <div className="cards__container">
    
      <div className="cards__wrapper">
        
        <div className="home-about1">
            <h1 className='home-about-heading'>About Us</h1>
            <p className='home-about-para'>Aptech is a premier education institute. Aptech is a pioneer in providing career-orientated courses to aspiring professionals since 1986.
            The institute has trained 68 lakh (6.8 million) students through a wide network of education centres located in over 40 countries.
            Aptech is a leader in training since 1986. We have a wide network of centres all over India, proving that this is a great investment for starting your own business!</p>
            <button className='home-about-btn'>Read More</button>
        </div>

        <div className="home-about2">
           <Cards/>
        </div>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default HomeAbout
