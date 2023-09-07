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

// const StyletButton = styled.button`
//   width: 278px;
//   height: 52px;
//   border: 0;
//   border-radius: 0;
//   background: #580ea2;
//   border-radius: 6px;
//   color: white;

//   &:hover {
//     flex-shrink: 0;
//     cursor: pointer;
//     transform: translate(0, 0.01em);
//   }

//   &:active {
//     width: 275px;
//     height: 51px;
//     background: #271a58;
//   }
// `
export const Login = ({ user, onAuthButtonClick }) => {
  return (
    <div>
      <S.MainApp>
        <StyledLogin>
          <StyledH1>Пошумим???</StyledH1>
          <Link to='/' onClick={onAuthButtonClick}>
            {user ? 'выйти' : 'войти в IT'}
          </Link>
          <Link to='/register'>Перейти к регистрации</Link>
        </StyledLogin>
      </S.MainApp>
    </div>
  )
}
