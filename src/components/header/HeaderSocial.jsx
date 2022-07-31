import React from 'react'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'
import {TbBrandInstagram} from 'react-icons/tb'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.github.com/" target="_blank"><VscGithub /></a>
        <a href="https://www.facebook.com/" target="_blank"> <RiFacebookCircleLine /></a>

    </div>
  )
}

export default HeaderSocial