import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";
import * as S from "./BlockSearchStyled.js";

function BlockSearch() {
  const { theme } = useThemeContext();
  return (
    <S.CenterBlockSearch theme={theme}>
      <S.SearchSvg theme={theme}>
        <use xlinkHref={theme.iconSearch}></use>
      </S.SearchSvg>
      <S.SearchText
        theme={theme}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterBlockSearch>
  );
}
export default BlockSearch;
