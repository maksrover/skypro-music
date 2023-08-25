import '../App.css'
import MenuItem from './MenuBurger'
import { useState } from 'react'

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
          <MenuItem link="#" text="Главное" />
          <MenuItem link="#" text="Мой плейлист" />
          <MenuItem link="../signin.html" text="Войти" />
        </ul>
      </div>
    </nav>
  )
}

export default NavMenu
