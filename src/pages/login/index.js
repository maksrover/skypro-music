import { Link } from 'react-router-dom'
import * as S from '../../Style/App.styled'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: white;
`

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`

const StyledLink = styled(Link)`
  width: 278px;
  height: 52px;
  border: 0;
  border-radius: 0;
  background: #580ea2;
  border-radius: 6px;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    flex-shrink: 0;
    cursor: pointer;
    transform: translate(0, 0.01em);
  }

  &:active {
    width: 275px;
    height: 51px;
    background: #271a58;
  }
`

export const Login = ({ user, onAuthButtonClick }) => {
  return (
    <div>
      <S.MainApp>
        <StyledLogin>
          <StyledH1>Пошумим???</StyledH1>
          <StyledLink to='/' onClick={onAuthButtonClick}>
            {user ? 'Выйти' : 'Войти в IT'}
          </StyledLink>
          <StyledLink to='/register'>Перейти к регистрации</StyledLink>
        </StyledLogin>
      </S.MainApp>
    </div>
  )
}
