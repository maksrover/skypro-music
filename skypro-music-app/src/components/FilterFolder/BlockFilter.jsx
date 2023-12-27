import React from "react";
import * as S from "./BlockFilterStyled";
import { useState } from "react";
import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";

function BlockFilter() {
  const { theme } = useThemeContext();

  const [filter, setShowFilter] = useState(false);

  const [filterYears, setYearsFilter] = useState(false);

  const [filterGenre, setGenreFilter] = useState(false);

  const showFilterAuthor = () => {
    setShowFilter(!filter);
    setYearsFilter(false);
    setGenreFilter(false);
  };

  const showFilterYears = () => {
    setYearsFilter(!filterYears);
    setShowFilter(false);
    setGenreFilter(false);
  };

  const showFilterGenre = () => {
    setGenreFilter(!filterGenre);
    setShowFilter(false);
    setYearsFilter(false);
  };
  return (
    <S.CenterBlockFilter theme={theme}>
      <S.FilterTitle theme={theme}>Искать по:</S.FilterTitle>
      {filter ? (
        <S.BtnActive theme={theme} onClick={showFilterAuthor}>
          исполнителю
          <S.MenuFilter theme={theme}>
            <S.MenuList theme={theme}>
              <S.MenuItem theme={theme}>Nero</S.MenuItem>
              <S.MenuItem theme={theme}>Dynoro, Outwork, Mr. Gee</S.MenuItem>
              <S.MenuItem theme={theme}>Ali Bakgor</S.MenuItem>
              <S.MenuItem theme={theme}>Стоункат, Psychopath</S.MenuItem>
              <S.MenuItem theme={theme}>Jaded, Will Clarke, AR/CO</S.MenuItem>
              <S.MenuItem theme={theme}>Blue Foundation, Zeds Dead</S.MenuItem>
              <S.MenuItem theme={theme}>
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </S.MenuItem>
              <S.MenuItem theme={theme}>minthaze</S.MenuItem>
              <S.MenuItem theme={theme}>Calvin Harris, Disciples</S.MenuItem>
              <S.MenuItem theme={theme}>Tom Boxer</S.MenuItem>
            </S.MenuList>
          </S.MenuFilter>
        </S.BtnActive>
      ) : (
        <S.FilterButton theme={theme} onClick={showFilterAuthor}>
          исполнителю
        </S.FilterButton>
      )}

      {filterYears ? (
        <S.BtnActive theme={theme} onClick={showFilterYears}>
          году выпуска
          <S.MenuFilter theme={theme}>
            <S.MenuList theme={theme}>
              <S.MenuItem theme={theme}>2013</S.MenuItem>
              <S.MenuItem theme={theme}>2014</S.MenuItem>
              <S.MenuItem theme={theme}>2015</S.MenuItem>
              <S.MenuItem theme={theme}>2016</S.MenuItem>
              <S.MenuItem theme={theme}>2017</S.MenuItem>
              <S.MenuItem theme={theme}>2018</S.MenuItem>
              <S.MenuItem theme={theme}>2019</S.MenuItem>
              <S.MenuItem theme={theme}>2020</S.MenuItem>
              <S.MenuItem theme={theme}>2020</S.MenuItem>
              <S.MenuItem theme={theme}>2021</S.MenuItem>
            </S.MenuList>
          </S.MenuFilter>
        </S.BtnActive>
      ) : (
        <S.FilterButton theme={theme} onClick={showFilterYears}>
          году выпуска
        </S.FilterButton>
      )}
      {filterGenre ? (
        <S.BtnActive theme={theme} onClick={showFilterGenre}>
          жанру
          <S.MenuFilterActive theme={theme}>
            <S.MenuList theme={theme}>
              <S.MenuItem theme={theme}>Folk music</S.MenuItem>
              <S.MenuItem theme={theme}>Country</S.MenuItem>
              <S.MenuItem theme={theme}>Latin American music</S.MenuItem>
              <S.MenuItem theme={theme}>Blues</S.MenuItem>
              <S.MenuItem theme={theme}> Rhythm and blues</S.MenuItem>
              <S.MenuItem theme={theme}>Jazz</S.MenuItem>
              <S.MenuItem theme={theme}>
                Chanson, romance, author's song
              </S.MenuItem>
              <S.MenuItem theme={theme}>Electronic music</S.MenuItem>
              <S.MenuItem theme={theme}>Hip-Hop</S.MenuItem>
              <S.MenuItem theme={theme}>Reggae</S.MenuItem>
            </S.MenuList>
          </S.MenuFilterActive>
        </S.BtnActive>
      ) : (
        <S.FilterButton theme={theme} onClick={showFilterGenre}>
          жанру
        </S.FilterButton>
      )}
    </S.CenterBlockFilter>
  );
}
export default BlockFilter;
