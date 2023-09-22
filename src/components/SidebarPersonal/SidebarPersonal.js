
import { useUserContext } from '../../UserContext';
import * as S from './SidebarPersonal.styled';

function SidebarLogin({ onAuthButtonClick }) {
  const handleLogout = () => {
    onAuthButtonClick();
  };
  const { user } = useUserContext();

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
      <S.SidebarIcon onClick={handleLogout}>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout" />
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}

export default SidebarLogin;