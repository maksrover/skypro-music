import MainSidebar from "../../components/sideBarFolder/MainSidebar";
import Navigation from "../../components/navFolder/Navigation";
import MyPlayList from "../../components/playlistFolder/MyPlaylist/MyPlaylist";
import * as S from "../mainFolder/main.styled";

export function Favorites() {
  return (
    <S.Main>
      <Navigation />
      <MyPlayList />
      <MainSidebar />
    </S.Main>
  );
}
