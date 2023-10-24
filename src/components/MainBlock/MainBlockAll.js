import Search from '../Search/Search'
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
import Playlist from '../Playlist/Playlist'
import * as S from './MainBlock.styled'
import { useState } from 'react'
import {useSelector} from "react-redux";

function MainBlockAll({ showSkeleton, error }) {
  const [searchValue, setSearchValue] = useState('')
  const tracks = useSelector(state => state.playlist.tracks);
  const filterTracks = () => {
    return tracks
      .filter(
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
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
      {/* <FilterMenu /> */}
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitileCol01>Трек</S.PlaylistTitileCol01>
          <S.PlaylistTitileCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitileCol02>
          <S.PlaylistTitileCol03>АЛЬБОМ</S.PlaylistTitileCol03>
          <S.PlaylistTitileCol04>
            <S.PlaylistTitileSvg alt="time">
              <use xlinkHref="../img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitileSvg>
          </S.PlaylistTitileCol04>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {/* <p>{addTodoError}</p> */}

          {error ? (
            <S.ErrorMessage>{error}</S.ErrorMessage>
          ) : showSkeleton ? (
            <ContentPlaylistSkeleton />
          ) : (
            <Playlist tracks={(filterTracks())} />
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default MainBlockAll
