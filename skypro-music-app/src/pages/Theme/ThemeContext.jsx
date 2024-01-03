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
    iconPlay: (
      <svg
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z"
          fill="#D9D9D9"
        />
      </svg>
    ),
    iconPause: (
      <svg
        width="15"
        height="19"
        viewBox="0 0 15 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="5" height="19" fill="#D9D9D9" />
        <rect x="10" width="5" height="19" fill="#D9D9D9" />
      </svg>
    ),
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
