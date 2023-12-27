import * as S from "./BurgerMenuStyled.js";
import { AuthContext } from "../../pages/authContext/AuthContext";
import { useContext } from "react";
import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";

function BurgerMenu() {
  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useThemeContext();
  return (
    <S.BurgerMenuList>
      <S.MenuItem>
        <S.MenuLink
          theme={theme}
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink theme={theme} to={"/favorites"}>
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink theme={theme} onClick={() => logout()}>
          Выйти
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink onClick={toggleTheme}>
          <S.IconThemeSvg theme={theme}>
            <use xlinkHref={theme.iconTheme}></use>
          </S.IconThemeSvg>
        </S.MenuLink>
      </S.MenuItem>
    </S.BurgerMenuList>
  );
}
export default BurgerMenu;
