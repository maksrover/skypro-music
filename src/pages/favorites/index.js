import * as S from '../../Style/App.styled'
import NavMenu from '../../components/NavMenu/NavMenu'
import MainBlockAll from '../../components/MainBlock/MainBlockAll'
import SidebarAll from '../../components/Sidebar/SidebarAll'
import { useEffect, useState } from 'react'
import { getFavorites, refreshToken } from '../../api'
import { useUserContext } from '../../UserContext'

export const MyPlaylist = ({ showSkeleton, onAuthButtonClick }) => {
  const [tracks, setTracks] = useState([])
  const [error, setError] = useState(null)
  const { user, handleLogin } = useUserContext()

  useEffect(() => {
    if (user) {
      getFavorites({ accessToken: user.token.access })
        .then((track) => {
          setTracks(track)
        })
        .catch(() => {
          refreshToken({refreshToken: user.token.refresh}).then(data => {
            const newAccessToken = data.access
            handleLogin({...user, token: {access: newAccessToken, refresh: user.token.refresh}})
            getFavorites({ accessToken: user.token.access })
          })

          setError('Не удалось загрузить плейлист, попробуйте позже')
        })
    }
  }, [user])
  // console.log("треки", tracks);
  return (
    <div>
      <S.MainApp>
        <S.AppHeader>
          <S.Wrapper>
            <S.Container>
              <S.Main>
                <NavMenu />
                <MainBlockAll
                  tracks={tracks}
                  showSkeleton={showSkeleton}
                  error={error}
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