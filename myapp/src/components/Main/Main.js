import React, { useEffect } from 'react'
import "./Main.css"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from '../../../src/Asset/img.jpg'
import img2 from '../../../src/Asset/img2.jpg'
import img3 from '../../../src/Asset/img3.jpg'
import img4 from '../../../src/Asset/img4.jpg'
import img5 from '../../../src/Asset/img5.jpg'
import img6 from '../../../src/Asset/img6.jpg'
import img7 from '../../../src/Asset/img7.jpg'
import img8 from '../../../src/Asset/img8.jpg'
import img9 from '../../../src/Asset/img9.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: 'New Zealand',
    grade: 'CULTURAL RELEX',
    fees: '$700',
    description: "A Couples Trip in Bora Bora offers a romantic escape with breathtaking luxurious bungalows indulgent amenities and unforgettable experiences"
},
  {
    id:2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: 'Peru',
    grade: 'CULTURAL RELEX',
    fees: '$600',
    description: "The stones in the most handsome buildings throughout the Inca Empire used no mortar. These stones were cut so precisely, and wedged so closely together, that a credit card cannot be inserted between them."
},
  {
    id:3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: 'Australia',
    grade: 'CULTURAL RELEX',
    fees: '$700',
    description: "The Great Barrier Reef is a world-famous destination and is one of the Seven Natural Wonders of the World. This spectacular area can be explored by helicopter, by glass-bottomed boat, or by snorkelling and diving."
},
  {
    id:4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: 'Turkey',
    grade: 'CULTURAL RELEX',
    fees: '$800',
    description: "Cappadocia is a semi-arid place in Turkey known for its cone rock formations, cave churches, fairy chimneys, rock houses, underground cities and a unique landscape."
},
  {
    id:5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: 'Mexico',
    grade: 'CULTURAL RELEX',
    fees: '$1100',
    description: "Guanajuato is a well-designed city with plenty of plazas and squares, and leading away from those squares are many lanes and alleyways just waiting to be explored."
},
  {
    id:6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: 'Italy',
    grade: 'CULTURAL RELEX',
    fees: '$850',
    description: "The Cinque Terre represent one of the most pristine natural areas of Liguria, with a landscape unique in the world, shaped by the famous dry stone walls"
},
  {
    id:7,
    imgSrc: img7,
    destTitle: "Bora Bora",
    location: 'New Zealand',
    grade: 'CULTURAL RELEX',
    fees: '$700',
    description: "A Couples Trip in Bora Bora offers a romantic escape with breathtaking luxurious bungalows indulgent amenities and unforgettable experiences"
},
  {
    id:8,
    imgSrc: img8,
    destTitle: "Cinque Terre",
    location: 'Italy',
    grade: 'CULTURAL RELEX',
    fees: '$850',
    description: "The Cinque Terre represent one of the most pristine natural areas of Liguria, with a landscape unique in the world, shaped by the famous dry stone walls"
},
  {
    id:9,
    imgSrc: img9,
    destTitle: "Bora Bora",
    location: 'New Zealand',
    grade: 'CULTURAL RELEX',
    fees: '$700',
    description: "A Couples Trip in Bora Bora offers a romantic escape with breathtaking luxurious bungalows indulgent amenities and unforgettable experiences"
},


]

const Main = () => {
  useEffect(() =>{
    Aos.init({duration: 2000})
   }, [])
  return (
    <>
      <section className='main container section'>
        <div className='secTitle'>
          <h3 data-aos="fade-right"
          className='title'>
            Most visited destinations
          </h3>
        </div>

        <div className='seeContent grid'>
  {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
    return (
      <div key={id} className='singleDestination'>
        <div className='imgeDiv'>
          <img src={imgSrc} alt={destTitle}/>
        </div>
        <div className='cardInfo'>
          <h4 className='destTitle'>{destTitle}</h4>
          <span className='continent flex'>
            <HiOutlineLocationMarker className='icon'/>
            <span className='name'>{location}</span>
          </span>
          <div className='fees flex'>
            <div className='grade'>
              <span>{grade}<small>+1</small></span>
            </div>
            <div className='price'>
              <h5>{fees}</h5>
            </div>
          </div>
          <div className='desc'>
            <p>{description}</p>
          </div>
          <button className='btn flex'>
            DETAILS <HiOutlineClipboardCheck className='icon'/>
          </button>
        </div>
      </div>
    );
  })}
</div>

      </section>
    </>
  )
};

export default Main;