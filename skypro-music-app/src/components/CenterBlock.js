import PlaylistItem from "./playlistitem";
import FilterBlock from "./filterBlock";

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <FilterBlock />
      </div>
      <div className="centerblock__content">
        <PlaylistItem />
      </div>
    </div>
  );
}

export default CenterBlock;
