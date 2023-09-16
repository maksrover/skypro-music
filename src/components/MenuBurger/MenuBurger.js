import { Link, NavLink } from 'react-router-dom'

import * as S from './MenuBurger.styles'

function MenuItem({ user, onAuthButtonClick }) {

  return (
    <S.MenuItem>
          <NavLink className={"StyleLink"} to='/'>
            Главное
          </NavLink>
          <NavLink to='/favorites'>
            Мой плейлист
          </NavLink>
          <Link to='/login' onClick={onAuthButtonClick} >

            {user ? 'Войти' : 'Выйти'}

          </Link>
    </S.MenuItem>
  )
}

export default MenuItem
