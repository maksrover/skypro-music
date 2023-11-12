import React from "react";
import { Bar } from "./components/barFolder/bar";
import { Content } from "./components/contentFolder/content";
import { Nav } from "./components/navFolder/nav";
import { Search } from "./components/searchFolder/search";
import { Sidebar } from "./components/sideBarFolder/sidebar";
import * as S from "./app.styled";
import { Playlist } from "./components/playlistFolder/playlist";
import { PlaylistSkelet } from "./components/playlistFolder/playlistSkelet";

export function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search />
            <Content />

            <PlaylistSkelet />

            <Playlist activTrack isPlaying setIsPlaying setActivTrack />
          </S.MainCenterblock>
          <Sidebar />
        </S.Main>
        <S.Bar>
          <Bar />
        </S.Bar>
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
