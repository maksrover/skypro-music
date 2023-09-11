// import * as S from './MenuBurger.styles'

// function MenuItem({ link, text }) {
//   return (
//     <S.MenuItem>
//       <S.MenuLink href={link}>
//         {text}
//       </S.MenuLink>
//     </S.MenuItem>
//   )
// }

// export default MenuItem




import { Link, NavLink } from 'react-router-dom'

import * as S from './MenuBurger.styles'

function MenuItem({ user}) {


  return (
    <S.MenuItem>
          <NavLink className={"StyleLink"} to='/'>
            Главное
          </NavLink>
          <NavLink to='/favorites'>
            Мой плейлист
          </NavLink>
          <Link to='/login' onClick={user=(null)} >

            {user ? 'Войти' : 'Выйти'}

          </Link>
    </S.MenuItem>
  )
}

export default MenuItem



// import { NavLink } from 'react-router-dom'

// import styled from 'styled-components';

// // Создаем стилизованный NavLink
// const StyledNavLink = styled(NavLink)`
//   color: #000; 
//   text-decoration: underline

//   &.StyleLink {
//     color: white
//   }
// `;

// import * as S from './MenuBurger.styles'

// function MenuItem() {
//   return (
//     <S.MenuItem>
//       <StyledNavLink className={"StyleLink"} to='/'>
//         Главное
//       </StyledNavLink>
//       <StyledNavLink to='../../pages/login'>
//         Мой плейлист
//       </StyledNavLink>
//       <StyledNavLink to='/login'>
//         Войти
//       </StyledNavLink>
//     </S.MenuItem>
//   )
// }

// export default MenuItem