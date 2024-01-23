import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React from "react";
import * as S from "./NavigationStyled";
import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";

const { useState } = React;

function Navigation({ user, cancelHandler }) {
  const [show, setShow] = useState(false);
  const { theme } = useThemeContext();
  const showMenu = () => setShow(!show);
  return (
    <S.Nav theme={theme}>
      <S.Logo>
        <S.LogoImg src="/img/logo.png" alt="logo" />
      </S.Logo>
      <S.NavBurger theme={theme} onClick={showMenu}>
        <S.NavBurgerLine theme={theme}></S.NavBurgerLine>
        <S.NavBurgerLine theme={theme}></S.NavBurgerLine>
        <S.NavBurgerLine theme={theme}></S.NavBurgerLine>
      </S.NavBurger>
      {show && (
        <S.NavMenu>
          <BurgerMenu user={user} cancelHandler={cancelHandler} />
        </S.NavMenu>
      )}
    </S.Nav>
  );
}
export default Navigation;
