import { useState } from 'react';
import Search from '../Search/Search';
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton';
import FilterMenu from '../FilterMenu/FilterMunu';
import Playlist from '../Playlist/Playlist';
import DataFetcher from '../../api'; 
import * as S from './MainBlock.styled';



function MainBlock() {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [addTodoError, setAddTodoError] = useState(null);

  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <FilterMenu />
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
          <S.ErrorMessage>{addTodoError}</S.ErrorMessage>
          <DataFetcher
            setTracks={setTracks}
            setAddTodoError={setAddTodoError}
            setShowSkeleton={setShowSkeleton}
          />
          {showSkeleton ? (
            <ContentPlaylistSkeleton />
          ) : (
            <Playlist tracks={tracks} />
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default MainBlock;