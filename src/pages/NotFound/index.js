import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import * as S from '../../Style/App.styled'

const StyledH1 = styled.h1`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings:
    'clig' off,
    'liga' off;
  /* Pres → Heading Xl */
  font-family: StratosSkyeng;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px; /* 105% */
  margin: 0px;
`
const StyledH2 = styled.h2`
  color: white;
`

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`

const StyledPText = styled.p`
  color: #4e4e4e;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  /* Desk • 1366/Text M */
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
`

const StyledNavLink = styled(NavLink)`
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

  &:active { /* Добавляем псевдокласс :active */
  width: 275px; /* Уменьшаем ширину */
  height: 51px; /* Уменьшаем высоту */

`

export const NotFound = () => {
  return (
    <S.MainApp>
    <StyledNotFound>
      <StyledH1>404</StyledH1>
      <StyledH2>Такой страницы не существует </StyledH2>
      <StyledPText>
        Возможно, она была удалена или перенесена на другой адрес{' '}
      </StyledPText>
      {/* <StyledButton >Вернуться на главную</StyledButton> */}
      <StyledNavLink to="/">Вернуться на главную</StyledNavLink>
    </StyledNotFound>
    </S.MainApp>
  )
}
