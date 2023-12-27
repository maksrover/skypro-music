import Player from "../../components/Player/Player";
import Navigation from "../../components/navFolder/Navigation";
import PlayList from "../../components/playlistFolder/playlist";
import MainSidebar from "../../components/sideBarFolder/MainSidebar";
import * as S from "./main.styled";

import { useThemeContext } from "../Theme/ThemeContext.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function Main() {
  const currentTrack = useSelector((state) => state.music.activeTrack);

  useEffect(() => {
    console.log(currentTrack);
  }, [currentTrack]);

  const { theme } = useThemeContext();

  return (
    <S.Wrapper>
      <S.Container theme={theme}>
        <S.Main>
          <Navigation />
          <PlayList />
          <MainSidebar />
        </S.Main>
        {currentTrack ? <Player /> : null}

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}
