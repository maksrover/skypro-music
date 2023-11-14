import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CenterBlock = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 356px;
`

export const CenterBlockh1 = styled.h1`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
  display: flex;
  justify-content: center;
  margin-bottom: 3px;
`

export const CenterBlockh2 = styled.h2`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
`

export const CenterBlockP = styled.p`
  color: #4e4e4e;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.054px;
  display: flex;
  justify-content: center;
`

export const CenterBlockButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`

export const CenterBlockButtonItem = styled(NavLink)`
  width: 278px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--palette-purple-90, #580ea2);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  display: flex;
  justify-content: center;
  align-items: center;
`
