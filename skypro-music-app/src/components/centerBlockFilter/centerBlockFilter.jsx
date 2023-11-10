import React, { useState } from "react";
import * as S from "./centerBlockFilterStyled";

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
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton onClick={toggleVisible}>исполнителю</S.FilterButton>
        <S.FilterButton onClick={toggleVisibleYear}>
          году выпуска
        </S.FilterButton>
        <S.FilterButton onClick={toggleVisibleGenre}>жанру</S.FilterButton>
      </S.CenterblockFilter>
      {visible && (
        <S.Author>
          <S.AuthorContent>
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
        <S.Author>
          <S.AutherContentYear>
            <span>По умолчанию</span>
            <span>Сначала новые</span>
            <span>Сначала старые</span>
          </S.AutherContentYear>
        </S.Author>
      )}
      {visibleGenre && (
        <S.Author>
          <S.AuthorContentGenre>
            <span>Рок</span>
            <span>Хип-хоп</span>
            <span>Поп-музыка</span>
            <span>Техно</span>
            <span>Инди</span>
          </S.AuthorContentGenre>
        </S.Author>
      )}
    </S.Parent>
  );
}

export default Filter;
