import * as S from '../../Style/App.styled'
import NavMenu from '../../components/NavMenu/NavMenu'
import MainBlockAll from '../../components/MainBlock/MainBlockAll'
import SidebarAll from '../../components/Sidebar/SidebarAll'
import { useEffect, useState } from 'react'
import { getFavorites, refreshToken } from '../../api'
import { useUserContext } from '../../UserContext'
import {useDispatch} from "react-redux";
import {setTracks} from "../../store/useAudioPlayer/AudioPlayer.slise";

export const MyPlaylist = ({ showSkeleton, onAuthButtonClick }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null)
  const { user, handleLogin } = useUserContext()


  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const track = await getFavorites({ accessToken: user.token.access })
          dispatch(setTracks(track));
        } catch (error) {
          try {
            const data = await refreshToken({refreshToken: user.token.refresh})
            const newAccessToken = data.access
            handleLogin({...user, token: {access: newAccessToken, refresh: user.token.refresh}})
            const track = await getFavorites({ accessToken: newAccessToken })
            setTracks(track)
          } catch (error) {
            setError('Не удалось загрузить плейлист, попробуйте обновить')
          }
        }
      }
    }

    fetchData()
  }, [user, ])


  return (
    <div>
      <S.MainApp>
        <S.AppHeader>
          <S.Wrapper>
            <S.Container>
              <S.Main>
                <NavMenu />
                <MainBlockAll
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
