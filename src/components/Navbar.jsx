import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
      <>
        <div className="navbar">
            <div className="navbar-container">
                <img className='nav-img' src="/Images/012.jpg" alt="navimg" />
                <div className="menu-icon" >
                    <Link to="/">
                      <img src="/Images/1920px-Aptech_Limited_Logo.svg.png" alt="" className="navbar-logo"/>
                    </Link>
                </div>
                <span className='navbar-headingText'>
                  {/* Aptech Learning Sohna Road */}
                </span> 
                <ul>
                    <input type="checkbox" id="check"/>
                    <span className='menu'>                    
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' >
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/courses" className='nav-links' >
                                Courses
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/about" className='nav-links' >
                                About Us
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/contact" className='nav-links'  >
                                Contact us
                            </Link>
                        </li>
                    </span>
                    
                    <label for="check" className="open-menu"><i className='fas fa-bars' id='cancel' ></i></label>
                    <label for="check" className="close-menu"><i className='fas fa-times' id='btn' ></i></label>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar

