import React from 'react';
import "./Home.css";
import SubNav from '../SubNav';
import HomeMenu from '../pages-comp/HomeMenu';
import HomeMenu3 from '../pages-comp/HomeMenu3';
import HomeAbout from '../pages-comp/HomeAbout';
import HomeCourses from '../pages-comp/HomeCourses';


function Home() {
  return (
    <>
    <SubNav/>
    <hr className='horizontal-line'/>
    <HomeMenu/>
    
    <HomeMenu3/>
    <HomeAbout/>
    <HomeCourses/>
    </>
  )
}

export default Home
