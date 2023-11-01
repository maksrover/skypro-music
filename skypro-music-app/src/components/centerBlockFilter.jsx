import React, { useState } from "react";
import "./centerBlockFilter.css";

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
    <div className="parent">
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className="filter__button button-author _btn-text"
          onClick={toggleVisible}
        >
          исполнителю
        </div>
        <div
          className="filter__button button-year _btn-text"
          onClick={toggleVisibleYear}
        >
          году выпуска
        </div>
        <div
          className="filter__button button-genre _btn-text"
          onClick={toggleVisibleGenre}
        >
          жанру
        </div>
      </div>
      {visible && (
        <div className="author">
          <div className="author_content author_content-author">
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
          </div>
        </div>
      )}
      {visibleYear && (
        <div className="author author-year">
          <div className="author_content author_content-year">
            <span>По умолчанию</span>
            <span>Сначала новые</span>
            <span>Сначала старые</span>
          </div>
        </div>
      )}
      {visibleGenre && (
        <div className="author author-genre">
          <div className="author_content author_content-genre">
            <span>Рок</span>
            <span>Хип-хоп</span>
            <span>Поп-музыка</span>
            <span>Техно</span>
            <span>Инди</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
