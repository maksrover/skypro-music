import React, { useEffect, useState } from "react";
import { Bar } from "../../components/barFolder/bar";
import { Content } from "../../components/contentFolder/content";
import { Nav } from "../../components/navFolder/nav";
import { Search } from "../../components/searchFolder/search";
import { Sidebar } from "../../components/sideBarFolder/sidebar";
import * as S from "./main.styled";
import { PlaylistSkelet } from "../../components/playlistFolder/playlistSkelet";
import { Playlist } from "../../components/playlistFolder/playlist";

export function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <S.MainCenterblock>
            <Search />
            <Content />

            {loading ? <PlaylistSkelet /> : <Playlist />}
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
