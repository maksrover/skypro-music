import * as S from './index.styled'

export const Login = ({ user, onAuthButtonClick }) => {
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
              />
              <S.ModalInputPassword
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter>
                <S.AEnter to='/' onClick={onAuthButtonClick}>{user ? 'Выйти' : 'Войти в IT'}</S.AEnter>
              </S.ModalBtnEnter>
              <S.ModalBtnSingap>
                <S.ASingup to='/register'>Зарегистрироваться</S.ASingup>
              </S.ModalBtnSingap>
            </S.ModalFromLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </div>
  )
}
