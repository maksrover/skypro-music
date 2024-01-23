import React, { useEffect } from "react";
import * as S from "./BlockFilterStyled";
import { useState } from "react";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useAllTracksQuery } from "../../api/apiMusic";

function BlockFilter() {
  const { data = [] } = useAllTracksQuery();
  const { theme } = useThemeContext();
  const [genre, setGenre] = useState([]);

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

  useEffect(() => {
    if (data.length > 0) {
      const ganreSet = new Set();
      data.forEach((element) => {
        ganreSet.add(element.genre);
      });
      console.log(ganreSet);
      setGenre(Array.from(ganreSet));
    }
  }, [data]);

  const handleFilter = (filter, value) => {};
  return (
    <S.CenterBlockFilter theme={theme}>
      <S.FilterTitle theme={theme}>Искать по:</S.FilterTitle>
      {filter ? (
        <S.BtnActive theme={theme} onClick={showFilterAuthor}>
          исполнителю
          <S.MenuFilter theme={theme}>
            <S.MenuList theme={theme}>
              {data.map((item) => {
                return (
                  <S.MenuItem
                    key={item.id}
                    theme={theme}
                    onClick={() => handleFilter("author", item.author)}
                  >
                    {item.author}
                  </S.MenuItem>
                );
              })}
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
              {genre.map((item) => {
                return (
                  <S.MenuItem key={item} theme={theme}>
                    {item}
                  </S.MenuItem>
                );
              })}
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
