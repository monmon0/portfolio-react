import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/1123.png'
import HeaderSocial from './HeaderSocial'
// import Marquee from './Marquee'

const Header = () => {
  return (
    <header>
     
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>  Monica Trinh </h1>
        <h5 className="text-light">
          Web Developer and Illustrator
        </h5>

        <CTA />
      <HeaderSocial />
      {/* <Marquee /> */}

        <div className="me">

          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>

      </div>
    </header>
  )
}

export default Header