import React from 'react'
import './Fresh.css';
import fresh1 from '../../images/fresh1.png';
import fresh2 from '../../images/fresh2.png';
import fresh3 from '../../images/fresh3.png';
import fresh4 from '../../images/fresh4.png';


const Fresh = () => {
  return (
    <div className='freshMeal'>
        <div className='fresh'>
       <img src={fresh1} alt="fresh1"/>
       <img src={fresh2} alt="fresh2"/>
       <img src={fresh3} alt="fresh3"/>
       <img src={fresh4} alt="fresh4"/>
       </div>
       <button>View our menus</button>
    </div>
   
  )
}

export default Fresh