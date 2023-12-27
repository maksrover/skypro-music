import { createContext, useContext } from "react";

export const themes = {
  light: {
    color: "#000000",
    background: "#FFFFFF",
    backgroundColorIcon: "FFFFFF",
    backgroundColorNote: "#B1B1B1",
    backgroundBurgerLine: "#000000",
    borderColorButton: "#000000",
    colorBtnHover: "#9400D3",
    backgroundColor: "#DCDCDC",
    backgroundScrollbar: "#FFFFFF",
    backgroundScrollbarThumb: "#8A2BE2",
    progressBgColor: "#DCDCDC",
    iconColorActive: "#ffffff",
    iconLogo: "./img/logo_modal.png",
    iconTheme: "./img/icon/sprite.svg#icon-them-white",
    iconSearch: "./img/icon/sprite.svg#icon-search-black",
    iconLogout: "/img/outsvg.svg",
    iconPlay: "/img/icon/sprite.svg#icon-play-black",
    iconPause: "/img/pause.svg",
    iconNext: "/img/icon/sprite.svg#icon-next-white",
    iconPrev: "/img/icon/sprite.svg#icon-prev-white",
  },
  dark: {
    color: "#fff",
    background: "#000000",
    backgroundColorIcon: "#313131",
    backgroundColorNote: "#313131",
    backgroundBurgerLine: "#FFFFFF",
    borderColorButton: "#FFFFFF",
    colorBtnHover: "#d9b6ff",
    backgroundColor: "#272727",
    backgroundScrollbar: "#000000",
    backgroundScrollbarThumb: "#000000",
    progressBgColor: "#2e2e2e",
    iconColorActive: "#696969;",
    iconLogo: "./img/logo.png",
    iconTheme: "./img/icon/sprite.svg#icon-them",
    iconSearch: "./img/icon/sprite.svg#icon-search",
    iconLogout: "/img/outsvg.svg",
    iconPlay: "/img/icon/sprite.svg#icon-play",
    iconPause: "/img/icon/pause.svg",
    iconNext: "/img/icon/sprite.svg#icon-next",
    iconPrev: "/img/icon/sprite.svg#icon-prev",
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  if (!theme) return theme.dark;

  return theme;
};
