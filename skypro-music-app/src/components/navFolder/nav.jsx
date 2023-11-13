import { useState } from "react";
import React from "react";
import * as S from "./nav.styled";

export function Nav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  function toggleVisibilityDown(e) {
    if (e.keyCode === 13) {
      toggleVisibility();
    }
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger
        tabIndex={0}
        onClick={toggleVisibility}
        onKeyDown={toggleVisibilityDown}
      >
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="../signin.html">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
