import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usePlaylistTracks } from '../../components/constants';
import * as S from '../../Style/App.styled';
import NavMenu from '../../components/NavMenu/NavMenu';
import MainBlockCategory from '../../components/MainBlock/MainBlockCategory';
import SidebarAll from '../../components/Sidebar/SidebarAll';
import { setTracks } from '../../store/useAudioPlayer/AudioPlayer.slise';
import { useEffect } from 'react';

export const PlaylistPages = ({ showSkeleton, onAuthButtonClick }) => {
  const { PLAYLISTTRACK } = usePlaylistTracks();
  const params = useParams();
  const list = PLAYLISTTRACK.find((list) => list.id === +params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTracks(list.tracks));
  }, [dispatch, list.tracks]);

  return (
    <div>
      <S.MainApp>
        <S.AppHeader>
          <S.Wrapper>
            <S.Container>
              <S.Main>
                <NavMenu />
                <MainBlockCategory
                  id={list.id} // Передаем id плейлиста в MainBlock
                  name={list.name} // Передаем name плейлиста в MainBlock
                  tracks={list.tracks}
                  showSkeleton={showSkeleton}
                  error={list.error}
                />
                <SidebarAll
                  showSkeleton={showSkeleton}
                  onAuthButtonClick={onAuthButtonClick}
                />
              </S.Main>
              <S.Footer />
            </S.Container>
          </S.Wrapper>
        </S.AppHeader>
      </S.MainApp>
    </div>
  );
};
