import React from 'react'
import "./about.css"
import ME from "../../assets/01.JPG"
import {TbAward} from "react-icons/tb"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> 
        <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <TbAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years</small>
        </article>
        <article className='about__card'>
          <TbAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years</small>
        </article> 
        <article className='about__card'>
          <TbAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years</small>
        </article>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam voluptatem sit, in illo accusamus molestias facilis id saepe odio commodi doloribus vitae quos modi cumque delectus veritatis dicta voluptas.</p>
    <a href="#contact" className="btn btn-primary"> Let's Talk</a>
      </div>
    
     
    </div>
    
    </section>
  )
}

export default About