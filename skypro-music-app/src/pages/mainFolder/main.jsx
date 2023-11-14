import React from "react";

import { Bar } from "../../components/barFolder/bar";
import { Content } from "../../components/contentFolder/content";
import { Nav } from "../../components/navFolder/nav";
import { Search } from "../../components/searchFolder/search";
import { Sidebar } from "../../components/sideBarFolder/sidebar";
import * as S from "./main.styled";
import { Playlist } from "../../components/playlistFolder/playlist";

export function Main() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search />
            <Content />

            <Playlist />
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
