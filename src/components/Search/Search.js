import * as S from './Search.styles'

function Search({setSearchValue}) {
  return (
    <S.CenterblokSearch>
      <S.SearchSvg>
        <use xlinkHref="../img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" onChange={(e) => setSearchValue(e.target.value)} />
    </S.CenterblokSearch>
  )
}

export default Search
