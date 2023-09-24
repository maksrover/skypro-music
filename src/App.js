import { useEffect, useState } from 'react'
import * as S from './Style/App.styled'
import { AppRoutes } from './routes'
import getPlaylist from './api'
import { UserProvider } from './UserContext'

function App() {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

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

  const savedUser = localStorage.getItem('user');
  const initialUser = savedUser ? JSON.parse(savedUser) : null;
  
  return (
    <S.Apps>
      <UserProvider initialUser={initialUser} >
        <AppRoutes tracks={tracks} showSkeleton={showSkeleton} error={error} />
      </UserProvider>
    </S.Apps>
  );
}

export default App;
