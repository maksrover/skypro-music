import { Routes, Route } from 'react-router-dom'
import { MyPlaylist } from './pages/favorites'
import { Main } from './pages/main'
import { NotFound } from './pages/NotFound'
import { PlaylistPages } from './pages/category'
import { ProtectedRoute } from './components/protected-route'
import { useState, useEffect } from 'react'
import { Login } from './pages/login'
import { Register } from './pages/register'

export const AppRoutes = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogin = () => {
    const newUser = { login: 'taram' }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin}
          />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/"
          element={
            <Main
              user={user}
              onAuthButtonClick={user ? handleLogout : handleLogin}
            />
          }
        />
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/category/:id" element={<PlaylistPages />} />
        <Route path="/favorites" element={<MyPlaylist />} />
      </Route>
    </Routes>
  )
}
