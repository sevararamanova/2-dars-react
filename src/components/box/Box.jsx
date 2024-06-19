import React from 'react'
import './Box.css';
import hello from "../../images/Hello.png";

const Box = () => {
  return (
    <div className="box">
    <div className='box__img'> 
    <img src={hello} alt="hello"/>
    </div>
    <div className='box__description'>
        <h1> What's inside each box?</h1>
        <li>✓ Easy-to-follow recipes with clear nutritional info</li>
        <li>✓ High-quality ingredients sourced straight from the farm</li>
        <li>✓ Convenient meal kits that fit perfectly in the fridge</li>
        <li>✓ A fun cooking experience that makes you feel unstoppable</li>
        <a href="#">✓  Innovative packaging designed to reduce waste
</a>
<button>View our plans</button>
</div>
    
           
   
    </div>
 
  )
}

export default Box