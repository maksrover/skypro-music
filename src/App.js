// import AudioPlayer from './components/AudioPlayer/AudioPlayer'
// import NavMenu from './components/NavMenu/NavMenu'
// import MainBlock from './components/MainBlock/MainBlock'
// import Sidebar from './components/Sidebar/Sidebar'
import { useEffect, useState } from 'react'
import * as S from './Style/App.styled'
// import GlobalStyle from './Style/GlobalStyles'
import { AppRoutes } from './routes'
import getPlaylist from './api'

function App() {
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [tracks, setTracks] = useState([])
  const [error, setError] = useState(null);
  // const [AddTodoError, setAddTodoError] = useState(null)

  useEffect(() => {
    getPlaylist()
      .then((track) => {
        setTracks(track);
        setShowSkeleton(false);
      })
      .catch(() => {
        setError('Не удалось загрузить плейлист, попробуйте позже');
        setShowSkeleton(false);
      });
  }, []);

  return (
    <S.Apps>
      <AppRoutes tracks={tracks} showSkeleton={showSkeleton} error={error} />
    </S.Apps>
  )
}

export default App
