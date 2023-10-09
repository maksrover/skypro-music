import * as S from './Style/App.styled'
import { AppRoutes } from './routes'
import { UserProvider } from './UserContext'
import AudioPlayer from '../src/components/AudioPlayer/AudioPlayer'
import { useDispatch, useSelector } from 'react-redux'

import {
  playNextTrack,
  playPreviousTrack,
  toggleShuffle,
} from '../src/store/useAudioPlayer/AudioPlayer.slise'

function App() {
  const dispatch = useDispatch()
  const currentTrackUrl = useSelector((state) => state.playlist.currentTrackUrl)
  const showAudioPlayer = useSelector((state) => state.playlist.showAudioPlayer)

  const handlePlayNext = () => {
    dispatch(playNextTrack())
  }

  const handlePlayPrevious = () => {
    dispatch(playPreviousTrack())
  }

  const handleToggleShuffle = () => {
    dispatch(toggleShuffle())
  }


  const savedUser = localStorage.getItem('user')
  const initialUser = savedUser ? JSON.parse(savedUser) : null

  return (
    <S.Apps>
      <UserProvider initialUser={initialUser}>
        <AppRoutes  />
        {showAudioPlayer ? <AudioPlayer currentTrackUrl={currentTrackUrl}           onPlayNext={handlePlayNext}
          onPlayPrevious={handlePlayPrevious}
          onToggleShuffle={handleToggleShuffle}/> : null}
      </UserProvider>
    </S.Apps>
  )
}

export default App
