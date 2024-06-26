import React from 'react'
import './HomeCourses.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';


import slide_image_1 from "./Aptech/advanced_excel.jpg";
import slide_image_2 from "./Aptech/Basic-Computer-Courses-List.png";
import slide_image_3 from "./Aptech/c-and-c++.png";
import slide_image_4 from "./Aptech/Cloud Computing Blog-1.jpg";
import slide_image_5 from "./Aptech/android.jpg";
import slide_image_6 from "./Aptech/2.jpg";
import slide_image_7 from "./Aptech/AI&ML.png";
import slide_image_8 from "./Aptech/data-analysis.jpg";
import slide_image_9 from "./Aptech/Full-stack-web-development.png";
import slide_image_10 from "./Aptech/Java-Programming.webp";
import slide_image_11 from "./Aptech/data-science.webp";
import slide_image_12 from "./Aptech/java-web-development.jpg";
import slide_image_13 from "./Aptech/MSdotnet.png";
import slide_image_14 from "./Aptech/Python.png";
import slide_image_15 from "./Aptech/python-for-web-development2.png";
import slide_image_16 from "./Aptech/python-app-development-guide.png";
import slide_image_17 from "./Aptech/red-hat2.png";
import slide_image_18 from "./Aptech/Tally Prime.jpg";
import slide_image_19 from "./Aptech/web-designing.jpg";
import slide_image_20 from "./Aptech/web_development.jpg";


function HomeCourses() {
  
  return (
    <div className='home-container-slide'>

    <h1 className='home-courses_heading'>Our Courses</h1>

      <Swiper className='home-swiper_container'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5,
          }
        }

        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        
        modules={[EffectCoverflow,Autoplay]}
        
      >
        <div className='home-swiper-wrapper'>
        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_1} alt="slide_image" /><span className='name-slide'>Advance Excel</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_2} alt="slide_image" /><span className='name-slide'>Basic Computer Courses</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_3} alt="slide_image" /><span className='name-slide'>C/C++ Programing</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_4} alt="slide_image" /><span className='name-slide'>Cloud Computing</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_5} alt="slide_image" /><span className='name-slide'>Android</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_6} alt="slide_image" /><span className='name-slide'>Ethical Hacking</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_7} alt="slide_image" /><span className='name-slide'>AI & ML</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_8} alt="slide_image" /><span className='name-slide'>Data Analysis</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_9} alt="slide_image" /><span className='name-slide'>Full Stack Web Development</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_10} alt="slide_image" /><span className='name-slide'>Java Programming</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_11} alt="slide_image" /><span className='name-slide'>Data Science</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_12} alt="slide_image" /><span className='name-slide'>Java Web Development</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_13} alt="slide_image" /><span className='name-slide'> .NET</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_14} alt="slide_image" /><span className='name-slide'>Python Programing</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_15} alt="slide_image" /><span className='name-slide'>Python Web Development</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_16} alt="slide_image" /><span className='name-slide'>Python App Development</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_17} alt="slide_image" /><span className='name-slide'>Red Hat</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_18} alt="slide_image" /><span className='name-slide'>Tally Prime</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_19} alt="slide_image" /><span className='name-slide'>Web Designing</span>
        </SwiperSlide>

        <SwiperSlide className='home-swiper-slide'>
          <img src={slide_image_20} alt="slide_image" /><span className='name-slide'>Web Development</span>
        </SwiperSlide>

        </div>
       
      </Swiper>
    </div>
  )
}
export default HomeCourses



