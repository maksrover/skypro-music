import { useParams } from 'react-router-dom'
import { usePlaylistTracks  } from '../../components/constants'
import * as S from '../../Style/App.styled'
import NavMenu from '../../components/NavMenu/NavMenu'
import MainBlockCategory from '../../components/MainBlock/MainBlockCategory'
import SidebarAll from '../../components/Sidebar/SidebarAll'

export const PlaylistPages = ({ showSkeleton, onAuthButtonClick }) => {

  const { PLAYLISTTRACK } = usePlaylistTracks();
  const params = useParams()
  console.log(PLAYLISTTRACK);
  const list = PLAYLISTTRACK.find((list) => list.id === +params.id)
  console.log(list);
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
                // {list.name}
                // {list.id}
                // {list.text}
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

  )
}

