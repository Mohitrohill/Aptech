import React from 'react';
import CardItems from './Carditems';
import './Cards.css';

function Cards() {
  return (
    

            <ul className='cards__items'>
                <CardItems
                src='Images/Aptech/python-app-development-guide.png'
                text='Our Mission'
                label=''
                path='/services'/>
            
                <CardItems
                 src='/Images/Aptech/Tally Prime.jpg'
                text='Our Aproach'
                label=''
                path='/products'/>
            
                <CardItems
                src='/Images/Aptech/web_development.jpg'
                text='Our Vision'
                label=''
                path='/sign-up'/>
            </ul>
       
  )
}

export default Cards
