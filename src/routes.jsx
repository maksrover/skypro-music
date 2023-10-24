import { Routes, Route } from 'react-router-dom'
// import { UserProvider } from './UserContext';
import { MyPlaylist } from './pages/favorites'
import { Main } from './pages/main'
import { NotFound } from './pages/NotFound'
import { PlaylistPages } from './pages/category'
import { ProtectedRoute } from './components/protected-route'
import { useEffect } from 'react'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { useUserContext } from './UserContext';


export const AppRoutes = ({ tracks, showSkeleton, error }) => {

  const { user, handleLogin, handleLogout } = useUserContext();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      handleLogin(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onAuthButtonClick={user ? handleLogout : handleLogin}/>}
      />

      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/"
          element={
            <Main tracks={tracks} showSkeleton={showSkeleton} error={error}
              user={user}
              onAuthButtonClick={user ? handleLogout : handleLogin}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/category/:id" element={<PlaylistPages onAuthButtonClick={user ? handleLogout : handleLogin}/>} />
        <Route path="/favorites" element={<MyPlaylist showSkeleton={showSkeleton} error={error}
              user={user}
              onAuthButtonClick={user ? handleLogout : handleLogin}/>} />
      </Route>
    </Routes>
  )
}
