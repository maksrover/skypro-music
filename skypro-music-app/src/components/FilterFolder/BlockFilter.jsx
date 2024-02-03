import React, { useEffect } from "react";
import * as S from "./BlockFilterStyled";
import { useState } from "react";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useAllTracksQuery } from "../../api/apiMusic";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../pages/authContext/slice";

export function BlockFilter() {
  const { data = [] } = useAllTracksQuery();
  const { theme } = useThemeContext();
  const [genre, setGenre] = useState([]);
  const [dataTrack, setDataTrack] = useState([]);
  const dispatch = useDispatch();

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
      //console.log(ganreSet);
      setGenre(Array.from(ganreSet));
    }
    if (data.length > 0) {
      const dataSet = new Set();
      data.forEach((element) => {
        dataSet.add(element.release_date);
      });

      setDataTrack(["По умолчанию", "Сначала старые", "Сначала новые"]);
    }
  }, [data]);

  const filterCount = useSelector((state) => state.music.filters);
  const $isAuthorClick = useSelector((state) => state.music.$isAuthorClick);
  const $isGenreClick = useSelector((state) => state.music.$isGenreClick);
  const $isYearsClick = useSelector((state) => state.music.$isYearsClick);
  const countYears = useSelector((state) => state.music.countYears);
  const filteredAuthorGenreYears = useSelector(
    (state) => state.music.filteredAuthorGenreYears
  );
  const handleFilter = ({ nameFilter, valueFilter }) => {
    dispatch(setFilters({ nameFilter, valueFilter }));
  };
  useEffect(() => {
    //console.log(filteredAuthorGenreYears);
  }, [filteredAuthorGenreYears]);
  //console.log(filterCount);
  return (
    <S.CenterBlockFilter theme={theme}>
      <S.itemAuthorGenreBlockFilter>
        <S.FilterTitle theme={theme}>Искать по:</S.FilterTitle>
        {filterCount.author.length > 0 && (
          <S.filterCountAuthor theme={theme}>
            {filterCount.author.length}
          </S.filterCountAuthor>
        )}
        {filter ? (
          <S.BtnActive theme={theme} onClick={showFilterAuthor}>
            исполнителю
            <S.MenuFilter theme={theme}>
              <S.MenuList theme={theme}>
                {data.map((item) => {
                  return (
                    <S.MenuItem
                      $isAuthorClick={$isAuthorClick}
                      $isAuthorSelector={filterCount.author.includes(
                        item.author
                      )}
                      key={item.id}
                      theme={theme}
                      onClick={() => {
                        handleFilter({
                          nameFilter: "author",
                          valueFilter: item.author,
                        });
                      }}
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
        {filterCount.genre.length > 0 && (
          <S.filterCountGenre theme={theme}>
            {filterCount.genre.length}
          </S.filterCountGenre>
        )}
        {filterGenre ? (
          <S.BtnActive theme={theme} onClick={showFilterGenre}>
            жанру
            <S.MenuFilterActive theme={theme}>
              <S.MenuList theme={theme}>
                {genre.map((item) => {
                  return (
                    <S.MenuItemGenre
                      $isGenreClick={$isGenreClick}
                      $isGenreSelector={filterCount.genre.includes(item)}
                      onClick={() => {
                        handleFilter({
                          nameFilter: "genre",
                          valueFilter: item,
                        });
                      }}
                      key={item}
                      theme={theme}
                    >
                      {item}
                    </S.MenuItemGenre>
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
      </S.itemAuthorGenreBlockFilter>
      <S.itemYearsBlockFilter>
        <S.FilterTitle theme={theme}>Сортировать по:</S.FilterTitle>
        {countYears === 1 && (
          <S.filterCountYears theme={theme}>{countYears}</S.filterCountYears>
        )}
        {filterYears ? (
          <S.BtnActive theme={theme} onClick={showFilterYears}>
            {filterCount.years}
            <S.MenuFilter theme={theme}>
              <S.MenuList theme={theme}>
                {dataTrack.map((item) => {
                  return (
                    <S.MenuItemYears
                      $isYearsClick={$isYearsClick}
                      $isYearsSelector={filterCount.years.includes(item)}
                      onClick={() => {
                        handleFilter({
                          nameFilter: "years",
                          valueFilter: item,
                        });
                      }}
                      theme={theme}
                      key={item}
                    >
                      {item}
                    </S.MenuItemYears>
                  );
                })}
              </S.MenuList>
            </S.MenuFilter>
          </S.BtnActive>
        ) : (
          <S.FilterButton theme={theme} onClick={showFilterYears}>
            {filterCount.years}
          </S.FilterButton>
        )}
      </S.itemYearsBlockFilter>
    </S.CenterBlockFilter>
  );
}
export default BlockFilter;
