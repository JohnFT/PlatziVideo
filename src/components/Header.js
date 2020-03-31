import React from 'react'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/images/user-icon.png'
import '../assets/styles/components/Header.scss'

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="logo" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="use" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">Log Out</a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
