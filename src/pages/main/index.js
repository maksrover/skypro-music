import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import NavMenu from '../../components/NavMenu/NavMenu'
import MainBlock from '../../components/MainBlock/MainBlock'
import Sidebar from '../../components/Sidebar/Sidebar'
import * as S from '../../Style/App.styled'
// import TrackListFile from '../../components/track-list'

export const Main = () => {
  console.log(4);
  return (
    
    <S.MainApp>
      <S.AppHeader>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <NavMenu />
              <MainBlock />
              <Sidebar />
              {/* <TrackListFile /> */}
            </S.Main>
            <AudioPlayer />
            <S.Footer />
          </S.Container>
        </S.Wrapper>
      </S.AppHeader>
    </S.MainApp>
  )
}
