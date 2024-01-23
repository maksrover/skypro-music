import MainSidebar from "../../components/sideBarFolder/MainSidebar";
import Navigation from "../../components/navFolder/Navigation";
import PlayListCategory from "../../components/playlistFolder/playlistCategory";
import * as S from "../mainFolder/main.styled";

export const Category = () => {
  return (
    <S.Main>
      <Navigation />
      <PlayListCategory />
      <MainSidebar />
    </S.Main>
  );
};
