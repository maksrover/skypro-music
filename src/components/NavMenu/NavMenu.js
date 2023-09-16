import MenuItem from '../MenuBurger/MenuBurger'
import { useState } from 'react'
import * as S from './NavMenu.styles'
// import { Link } from 'react-router-dom'

function NavMenu() {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleMenu}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      <S.NavMenu className={`${isMenuVisible ? 'visible' : 'hidden'}`}>
        <S.MenuList>
          <MenuItem />
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  )
}

export default NavMenu
