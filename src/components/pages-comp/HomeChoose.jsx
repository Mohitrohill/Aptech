import React from 'react'
import './HomeChoose.css';

function HomeChoose() {
  return (
    <>
    <div className='choose-image'>
      <img src="/Images/Slider/AL Future with New Age Banner-01.jpg" alt="" />
    </div>
    <div className="choose-container">
        <div className="choose-wrapper1">
            <img src="/favicon.ico" alt="" />
        </div>
        <div className="choose-wrapper2">
            <div className="choose-text1">
                <h1>Why ? <span>Choose</span> us </h1>
            </div>
            <div className="choose-text2">
                <div>
                    <span>Popular Courses</span>
                    <span>Modern Book Library</span>
                </div>

                <div>
                    <span>Qualified Teachers</span>
                    <span>Update Notification</span>
                </div>

                <div>
                    <span>Entertainment Facilities</span>
                    <span>Online Support</span>
                </div>
            </div>
        </div>
      </div>
      </>
  )
}

export default HomeChoose
