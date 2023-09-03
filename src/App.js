import AudioPlayer from './components/AudioPlayer'
import NavMenu from './components/NavMenu'
import MainBlock from './components/MainBlock'
import Sidebar from './components/Sidebar'
import * as S from './App.styled'
import GlobalStyle from './GlobalStyles'

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
