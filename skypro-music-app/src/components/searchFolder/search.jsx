import { useState } from "react";
import React from "react";
import { FilterAuthor } from "../FilterFolder/filterAuthor";
import { FilterGenre } from "..//FilterFolder/filterGenre";
import { FilterYear } from "../FilterFolder/filterYear";
import * as S from "./search.styled";

export function Search() {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  return (
    <>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.Centerblockh2>Треки</S.Centerblockh2>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.CenterblockFilterItem>
          <S.CenterblockFilterItem>
            <S.FilterButton
              onClick={() => {
                toggleVisibleFilter("author");
              }}
              value="author"
              type="button"
              className={
                visibleFilter === "author"
                  ? "_btn-text _btn-active"
                  : "_btn-text"
              }
            >
              исполнителю
            </S.FilterButton>
            {visibleFilter === "author" && <FilterAuthor />}
          </S.CenterblockFilterItem>

          <S.CenterblockFilterItem>
            <S.FilterButton
              onClick={() => {
                toggleVisibleFilter("year");
              }}
              value="year"
              type="button"
              className={
                visibleFilter === "year" ? "_btn-text _btn-active" : "_btn-text"
              }
            >
              году выпуска
            </S.FilterButton>
            {visibleFilter === "year" && <FilterYear />}
          </S.CenterblockFilterItem>

          <S.CenterblockFilterItem>
            <S.FilterButton
              onClick={() => {
                toggleVisibleFilter("genre");
              }}
              value="genre"
              type="button"
              className={
                visibleFilter === "genre"
                  ? "_btn-text _btn-active"
                  : "_btn-text"
              }
            >
              жанру
            </S.FilterButton>
            {visibleFilter === "genre" && <FilterGenre />}
          </S.CenterblockFilterItem>
        </S.CenterblockFilterItem>
      </S.CenterblockFilter>
    </>
  );
}
