import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='footer-container'>
      <section className="footer-subscription">
        
        <div className="input-areas">
            <form action="">
                <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                <button>Subscribe</button>
            </form>
        </div>
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items footer-hide'>
            <h2>About Us</h2>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items footer-hide'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/'>Instagram</Link>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='https://www.youtube.com/'>Youtube</Link>
            <Link to='https://x.com/'>Twitter</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Address</h2>
            <Link to='https://maps.app.goo.gl/Vn77mqPrtbTDU7HMA' target='_blank'>
              Aptech Computer Education, 1<sup>st</sup> Floor, Opposite Radha Krishna Temple, Sector 66, Shona Road, Gurugram, Haryana 122101
            </Link>
          </div>
        </div>
      </div>
      
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            
            <div className="footer-facebook">
              <div className="icons-footer">
                <Link className="social-icon-link facebook" 
                to="https://www.facebook.com/" 
                target='_blank' 
                aria-label='Facebook'
                >
                <div className="layer-footer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-facebook-f"></span>
                </div>
                </Link>
              </div>
            </div>

            <div className="footer-instagram">
              <div className="icons-footer">
                <Link className="social-icon-link instagram" 
                to="https://www.instagram.com/" 
                target='_blank' 
                aria-label='Instagram'
                >
                <div className="layer-footer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-instagram"></span>
                </div>
                </Link>
              </div>
            </div>

            <div className="footer-youtube">
              <div className="icons-footer">
                <Link className="social-icon-link youtube" 
                to="https://www.youtube.com/" 
                target='_blank' 
                aria-label='Youtube'
                >
                  <div className="layer-footer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-youtube"></span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="footer-twitter">
              <div className="icons-footer">
                <Link className="social-icon-link twitter" 
                to="https://x.com/" 
                target='_blank' 
                aria-label='Twitter'
                >
                  <div className="layer-footer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-twitter"></span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="footer-linked">
              <div className="icons-footer">
                <Link className="social-icon-link linkedin" 
                to="https://in.linkedin.com/" 
                target='_blank' 
                aria-label='LinkedIn'
                >
                  <div className="layer-footer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

    <div className="footer-rights">
        <div className="footer-logo">
            <Link to='/' className="social-logo">
              <img src="/Images/1920px-Aptech_Limited_Logo.svg.png" alt="" />
            </Link>
        </div>
        <small className="website-rights">APTECH © 20--</small>
    </div>

    </>
  )
}

export default Footer
