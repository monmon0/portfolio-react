import React from 'react'
import "./nav.css"
import {CgHomeAlt} from 'react-icons/cg'
import {TiUserOutline} from 'react-icons/ti'
import {BiBookHeart} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareEdit} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick = {() => setActiveNav("#")} className = {activeNav === "#" ? "active" : ""}> <CgHomeAlt /></a>
      <a href="#about" onClick = {() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><TiUserOutline /></a>
      <a href="#services" onClick = {() => setActiveNav("#active")} className = {activeNav === "#active" ? "active" : ""}><BiBookHeart /></a>
      <a href="#experience" onClick = {() => setActiveNav("#experience")} className = {activeNav === "#experience" ? "active" : ""}><RiServiceFill /></a>
      <a href="#contact" onClick = {() => setActiveNav("#contact")} className = {activeNav === "#contact" ? "active" : ""}><BiMessageSquareEdit /></a>
    </nav>
  )
}

export default Nav