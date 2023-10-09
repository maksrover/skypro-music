import Search from '../Search/Search'
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
import Playlist from '../Playlist/Playlist'
import * as S from './MainBlock.styled'
import { useState } from 'react'
// import { useSelector } from 'react-redux';

function MainBlockCategory({ name, showSkeleton, error, tracks }) {
  const [searchValue, setSearchValue] = useState('')

  const filterTracks = () => {
    return tracks.filter(
      (track) =>
        (searchValue
          ? track.name.toLowerCase().includes(searchValue.toLowerCase())
          : track) ||
        (searchValue
          ? track.author.toLowerCase().includes(searchValue.toLowerCase())
          : track),
    )
  }

  return (
    <S.MainCenterblock>
      <Search setSearchValue={setSearchValue} />
      <S.CenterblockH2>{name}</S.CenterblockH2>

      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitileCol01>Трек</S.PlaylistTitileCol01>
          <S.PlaylistTitileCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitileCol02>
          <S.PlaylistTitileCol03>АЛЬБОМ</S.PlaylistTitileCol03>
          <S.PlaylistTitileCol04>
            <S.PlaylistTitileSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitileSvg>
          </S.PlaylistTitileCol04>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {error ? (
            <S.ErrorMessage>{error}</S.ErrorMessage>
          ) : showSkeleton ? (
            <ContentPlaylistSkeleton />
          ) : (
            <Playlist tracks={filterTracks()} />
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default MainBlockCategory
