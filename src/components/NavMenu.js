import '../App.css'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function NavMenu() {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    console.log('Toggle menu clicked')
    setMenuVisible(!isMenuVisible)
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleMenu}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className={`nav__menu menu ${isMenuVisible ? 'visible' : 'hidden'}`}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="../signin.html" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavMenu
