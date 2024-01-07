import Navigation from "../../components/navFolder/Navigation";
import PlayList from "../../components/playlistFolder/playlist";
import MainSidebar from "../../components/sideBarFolder/MainSidebar";
import * as S from "./main.styled";

export function Main() {
  return (
    <S.Main>
      <Navigation />
      <PlayList />
      <MainSidebar />
    </S.Main>
  );
}
