// import { useParams } from 'react-router-dom'
// import { PLAYLISTTRACK } from '../../components/constants'

import * as S from '../../Style/App.styled'
import NavMenu from '../../components/NavMenu/NavMenu'
import MainBlockAll from '../../components/MainBlock/MainBlockAll'
import SidebarAll from '../../components/Sidebar/SidebarAll'
// import { useEffect, useState } from 'react'
// import { getFavorites, refreshToken } from '../../api'
// import { useUserContext } from '../../UserContext'
import { useEffect, useState } from 'react'
import { getCategory, refreshToken } from '../../api'
import { useUserContext } from '../../UserContext'

import styled from 'styled-components'

const SyeltdSection = styled.section`
  color: white;
`

export const PlaylistPages = ({ showSkeleton, onAuthButtonClick }) => {
  const [tracks, setTracks] = useState([])
  const [error, setError] = useState(null)
  const { user, handleLogin } = useUserContext()

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const track = await getCategory({ accessToken: user.token.access })
          setTracks(track)
        } catch (error) {
          try {
            const data = await refreshToken({refreshToken: user.token.refresh})
            const newAccessToken = data.access
            handleLogin({...user, token: {access: newAccessToken, refresh: user.token.refresh}})
            const track = await getCategory({ accessToken: newAccessToken })
            setTracks(track)
          } catch (error) {
            setError('Не удалось загрузить плейлист, попробуйте обновить')
          }
        }
      }
    }
  
    fetchData()
  }, [user])
  // const params = useParams()
  // const list = PLAYLISTTRACK.find((list) => list.id === Number(params.id))
  return (
    <SyeltdSection>
      {/* <h1>{list.name}</h1>
      <p>id: {list.id}</p>
      <p>что: {list.text}</p> */}
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
    </SyeltdSection>
  )
}
