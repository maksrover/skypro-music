import Search from '../Search/Search'
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
import Playlist from '../Playlist/Playlist'
import * as S from './MainBlock.styled'
// import { useSelector } from 'react-redux';

function MainBlockAll({ showSkeleton, error, tracks}) {
// console.log("есть тут треки", tracks);
// const isLiked = useSelector((state) => state.playlist.isLiked)
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
      {/* <FilterMenu /> */}
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
        {/* <p>{addTodoError}</p> */}

        {error ? (
          <S.ErrorMessage>{error}</S.ErrorMessage>
        ) : showSkeleton ? (
          <ContentPlaylistSkeleton />
        ) : (
          <Playlist tracks={tracks} />
        )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default MainBlockAll
