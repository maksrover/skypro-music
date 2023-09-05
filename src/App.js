import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import NavMenu from './components/NavMenu/NavMenu'
import MainBlock from './components/MainBlock/MainBlock'
import Sidebar from './components/Sidebar/Sidebar'
import * as S from './Style/App.styled'
import GlobalStyle from './Style/GlobalStyles'

function App() {
  return (
    <S.App>
      <GlobalStyle />
      <S.AppHeader>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <NavMenu />
              <MainBlock />
              <Sidebar />
            </S.Main>
            <AudioPlayer />
            <S.Footer />
          </S.Container>
        </S.Wrapper>
      </S.AppHeader>
    </S.App>
  )
}

export default App
