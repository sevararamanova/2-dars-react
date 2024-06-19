import React from 'react'
import './Nav.css';
import hello from '../../images/helloFresh.png'
import strelka from '../../images/strelka.png'


const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__img'>
      <img src={hello} alt="hello"/>
      </div>
      <div className='nav__a'>
      <ul>
        <li>
          <a href="#">Our Plans</a>
        </li>
        <li>
          <a href="#">How It Works</a>
        </li>
        <li>
          <a href="#" id="li1">Our Menus <img id="li" src={strelka} alt="strelka"/></a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#"id="li2" >Sustainability <img src={strelka} alt="strelka"/> </a>
        </li>
        <li>
          <a href="#">Thankgiving Box </a>
        </li>
      </ul>
      </div>
      <div className='nav__btn'>
        <button>Log in</button>
      </div>
    </div>
  )
}

export default Nav