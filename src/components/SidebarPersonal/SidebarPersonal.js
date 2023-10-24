
import { useUserContext } from '../../UserContext';
import * as S from './SidebarPersonal.styled';
import {hideAudioPlayer} from '../../store/useAudioPlayer/AudioPlayer.slise'
import { useDispatch } from 'react-redux';

function SidebarLogin({ onAuthButtonClick }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    onAuthButtonClick();
    dispatch(hideAudioPlayer());
  };
  const { user } = useUserContext();

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
      <S.SidebarIcon onClick={handleLogout}>
        <svg alt="logout">
          <use xlinkHref="../img/icon/sprite.svg#logout" />
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}

export default SidebarLogin;