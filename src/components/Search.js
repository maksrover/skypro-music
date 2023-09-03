import * as S from './Search.styles'

function Search() {
  return (
    <S.CenterblokSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblokSearch>
  )
}

export default Search
