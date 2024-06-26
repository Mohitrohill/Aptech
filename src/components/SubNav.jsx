import React from 'react';
import './SubNav.css';
import { Link } from 'react-router-dom';

function SubNav() {
  return (
    <div className='sub-nav'>
        <div className='sub-nav-container'>

          <div className="subnav-phone">
            <Link>
                <i class="fa-solid fa-phone">
                <span className="phone-no">
                       <sup> Call Us today </sup>
                </span>
                </i> 
            </Link><br/>
            <span className='phone'>9996399422</span>
          </div>

          <div className="subnav-whatsapp">
            <Link>
                <i class="fa-brands fa-whatsapp">
                    <span className="phone-no">
                    <sup> WhatsApp Us </sup>
                    </span>
                </i>
            </Link><br/>
            <span className='phone'>9996399422</span>
          </div>

          <div className="subnav-time">
            
                <i class="fa-regular fa-clock">
                    <span className="clock-text">
                    <sup> We Are Open ! </sup>
                    </span>
                </i>
            <br/>
            <span className='phone'>Mon-Fri 9:00-19:00</span>
          </div>

      </div>
    </div>
  )
}

export default SubNav
