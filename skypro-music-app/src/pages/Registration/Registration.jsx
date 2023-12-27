import * as S from "../mainFolder/main.styled";
import { Link } from "react-router-dom";

export const Registracion = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <div>
            <Link to="/registracion">
              <h1>Registracion</h1>
            </Link>
          </div>
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
};
