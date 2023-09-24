import { useState } from 'react'
import * as S from './index.styled'
import { useNavigate } from 'react-router-dom'; 



const RegistrationForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [usernameError, setUsernameError] = useState(null)

  const navigate = useNavigate();

  const handleLinkClick = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setPasswordsMatch(false)
      setEmailError(null)
      // setPasswordError('Пароли не совпадают.');
      setUsernameError(null)
      return
    }

    const data = {
      email,
      password,
      username,
    }

    try {
      const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/signup/',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (response.ok) {
        const user = await response.json()
        console.log('User successfully registered:', user)
        setEmailError(null)
        setPasswordError(null)
        setUsernameError(null)
        navigate('/login');
      } else {
        const errorData = await response.json()
        console.log('Registration failed:', errorData)
        setEmailError(errorData.email ? errorData.email[0] : null)
        setPasswordError(errorData.password ? errorData.password[0] : null)
        setUsernameError(errorData.username ? errorData.username[0] : null)
      }
    } catch (error) {
      console.error('Error registering user:', error)
      setEmailError(null)
      setPasswordError('An error occurred during registration.')
      setUsernameError(null)
    }
  }

  return (
    <S.ModalFormLogin>
      {/* {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>} */}
      <S.A href="../">
        <S.ModalLogo>
          <img src="../img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
      </S.A>

      <S.ModalInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      <S.ModalInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.ModalInput
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value)
          setPasswordsMatch(true)
        }}
      />
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      {!passwordsMatch && (
        <div style={{ color: 'red' }}>Пароли не совпадают</div>
      )}
      <S.ModalInput
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
      <S.ModalBtnSingupEnt >
        {/* <button type="submit">Register</button> */}
        <S.ModalBtnSingupEntA onClick={handleLinkClick}>Зарегистрироваться</S.ModalBtnSingupEntA>
      </S.ModalBtnSingupEnt>

    </S.ModalFormLogin>
  )
}

export default RegistrationForm
