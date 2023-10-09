import NavMenu from '../../components/NavMenu/NavMenu'
import MainBlock from '../../components/MainBlock/MainBlock'
import Sidebar from '../../components/Sidebar/Sidebar'
import * as S from '../../Style/App.styled'

export const Main = ({tracks, showSkeleton, error, onAuthButtonClick}) => {
  return (
    <S.MainApp>
      <S.AppHeader>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <NavMenu />
              <MainBlock tracks={tracks} showSkeleton={showSkeleton} error={error}/>
              <Sidebar  showSkeleton={showSkeleton} onAuthButtonClick={onAuthButtonClick}/>
            </S.Main>
            <S.Footer />
          </S.Container>
        </S.Wrapper>
      </S.AppHeader>
    </S.MainApp>
  )
}
