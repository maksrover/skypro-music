// import { Link } from 'react-router-dom'
import * as S from './index.styled'
import RegistrationForm from './RegistrationForm';

export const Register = () => {
  return (
    <div>
      <S.Wrapper>
        <S.ContainerSingup>
          <S.ModalBlock>
          <RegistrationForm />
          </S.ModalBlock>
        </S.ContainerSingup>
      </S.Wrapper>
    </div>
  )
}
