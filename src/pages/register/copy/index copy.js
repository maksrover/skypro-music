// import { Link } from 'react-router-dom'
import * as S from './index.styled'

export const Register = () => {
  return (
    <div>
      <S.Wrapper>
        <S.ContainerSingup>
          <S.ModalBlock>
            <S.ModalFormLogin>
              <S.A href="../">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </S.A>
              <S.ModalInput
                className="modal__input login"
                type="text"
                name="login"
                placeholder="Почта"
              />
              <S.ModalInput
                className="modal__input password-first"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalInput
                className="modal__input password-double"
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <S.ModalBtnSingupEnt className="modal__btn-signup-ent">
                <S.ModalBtnSingupEntA to='/'>Зарегистрироваться</S.ModalBtnSingupEntA>
              </S.ModalBtnSingupEnt>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerSingup>
      </S.Wrapper>
    </div>
  )
}
