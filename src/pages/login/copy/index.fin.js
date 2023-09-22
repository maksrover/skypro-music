import { useState } from 'react';
import * as S from './index.styled';
import { useNavigate } from 'react-router-dom'; 

export const Login = ({ user, onAuthButtonClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Укажи почту || пароль =)');
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/login/',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        console.log('успех', userData);
        setError(null);
        navigate('/');
        onAuthButtonClick(userData);
      } else {
        const errorData = await response.json();
        console.log('Неверный логин', errorData);


        setError(errorData.detail);
      }
    } catch (error) {
      console.error('Ошибка', error);
      setError('Ошибка');
    }
  };

  return (
    <div>
      <S.Wrapper>
        <S.ContainerEnter>
          <S.ModalBlock>
            <S.ModalFromLogin action="#">
              <S.A href="../">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </S.A>
              <S.ModalInputLogin
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <S.ModalInputPassword
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
              )}

              <S.ModalBtnEnter>
                <S.AEnter  onClick={handleLogin}>
                  {user ? 'Выйти' : 'Войти в IT'}
                </S.AEnter>
              </S.ModalBtnEnter>
              <S.ModalBtnSingap>
                <S.ASingup to="/register">Зарегистрироваться</S.ASingup>
              </S.ModalBtnSingap>
            </S.ModalFromLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </div>
  );
};