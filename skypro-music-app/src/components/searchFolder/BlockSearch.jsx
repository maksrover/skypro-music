import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";
import * as S from "./BlockSearchStyled.js";
import { useDispatch } from "react-redux";
import { setFilters } from "../../pages/authContext/slice.js";

function BlockSearch() {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const onChandeSearchValue = (value) => {
    dispatch(setFilters({ nameFilter: "search", valueFilter: value }));
  };

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
        onChange={(event) =>
          onChandeSearchValue(event.target.value.toLocaleLowerCase())
        }
      />
    </S.CenterBlockSearch>
  );
}
export default BlockSearch;
