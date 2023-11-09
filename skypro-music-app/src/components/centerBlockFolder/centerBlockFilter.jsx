import React, { useState } from "react";
import * as S from "./CenterBlockFilter.styled";

function Filter() {
  const [visible, setVisible] = useState(false);
  const [visibleGenre, setVisibleGenre] = useState(false);
  const [visibleYear, setVisibleYear] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
    setVisibleGenre(null);
    setVisibleYear(null);
  }

  function toggleVisibleYear() {
    setVisibleYear(!visibleYear);
    setVisibleGenre(null);
    setVisible(null);
  }

  function toggleVisibleGenre() {
    setVisibleGenre(!visibleGenre);
    setVisible(null);
    setVisibleYear(null);
  }

  return (
    <S.Parent>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton onClick={toggleVisible}>исполнителю</S.FilterButton>
        <S.FilterButton onClick={toggleVisibleYear}>
          году выпуска{" "}
        </S.FilterButton>
        <S.FilterButton onClick={toggleVisibleGenre}>жанру</S.FilterButton>
      </S.CenterBlockFilter>
      {visible && (
        <S.Author>
          <S.AuthorContent>
            {" "}
            <span>Nero</span>
            <span>Dynoro, Outwork, Mr. Gee</span>
            <span>Ali Bakgor</span>
            <span>Стоункат, Psychopath</span>
            <span>Jaded, Will Clarke, AR/CO</span>
            <span>Blue Foundation, Zeds Dead</span>
            <span>HYBIT, Mr. Black, Offer Nissim, Hi Profile</span>
            <span>minthaze</span>
            <span>Calvin Harris, Disciples</span>
            <span>Tom Boxer</span>
          </S.AuthorContent>
        </S.Author>
      )}
      {visibleYear && (
        <S.AuthorYear>
          <S.AuthorContentYear>
            <span>По умолчанию</span>
            <span>Сначала новые</span>
            <span>Сначала старые</span>
          </S.AuthorContentYear>
        </S.AuthorYear>
      )}
      {visibleGenre && (
        <S.AuthorGenre>
          <S.AuthorContentGenre>
            {" "}
            <span>Рок</span>
            <span>Хип-хоп</span>
            <span>Поп-музыка</span>
            <span>Техно</span>
            <span>Инди</span>
          </S.AuthorContentGenre>
        </S.AuthorGenre>
      )}
    </S.Parent>
  );
}

export default Filter;
