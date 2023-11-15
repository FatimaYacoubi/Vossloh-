import React from 'react'
import Button from '../Button/button';
import './HeroSection.css';
import img from "./dddd.png"
import oo from "./oo.jpg"


function HeroSection() {
  return (
    <div className='hero-container'>
        <img className='imagehero' src={oo} style={{width:"2200px"}} />


    <div align="center" className='textoverlay'>
    <img style={{height:"130px"}}src={img} ></img>
      
    {/* <h1 className="H2">Become a member of our team and choose your dream
    </h1>       */}

    <div style={{marginTop: '10px'}} >
    
{/* <Button name="Learn More"> commandez</Button>  */}
    </div> </div> </div>
  )
}

export default HeroSection