import * as S from './MenuBurger.styles'

function MenuItem({ link, text }) {
  return (
    <S.MenuItem>
      <S.MenuLink href={link}>
        {text}
      </S.MenuLink>
    </S.MenuItem>
  )
}

export default MenuItem