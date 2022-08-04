import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import {GiStarSattelites} from 'react-icons/gi'


const App = () => {
  return (
    <>
     <div className="header__deco">
        <p>Discipline </p>
        <p id="line"> ━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
        <p>Critical Thinking</p>
      </div>
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      {/* <Services /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />

    </>
  )
}

export default App