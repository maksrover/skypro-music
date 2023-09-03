import AudioPlayer from './components/AudioPlayer'
import NavMenu from './components/NavMenu'
import MainBlock from './components/MainBlock'
import Sidebar from './components/Sidebar'
import * as S from './App.styled'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src:
    local('StratosSkyeng'),
    local('StratosSkyeng'),
    url('../public/fonts/StratosSkyeng.woff2') format('woff2'),
    url('../public/fonts/StratosSkyeng.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  /* font-family: 'StratosSkyeng', sans-serif; */
  color: #ffffff;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
} 

._btn-icon:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
`

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
