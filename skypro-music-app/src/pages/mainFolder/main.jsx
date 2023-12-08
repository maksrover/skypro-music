import React, { useEffect, useState } from "react";
import { Playlist } from "../../components/playlistFolder/playlist";
import { Bar } from "../../components/barFolder/bar";
import { Content } from "../../components/contentFolder/content";
import { Nav } from "../../components/navFolder/nav";
import { Search } from "../../components/searchFolder/search";
import { Sidebar } from "../../components/sideBarFolder/sidebar";
import * as S from "./main.styled";
import { PlaylistSkelet } from "../../components/playlistFolder/playlistSkelet";
import { GlobalStyle } from "./globalStyle";
import { getTrack } from "../api";

export function Main() {
  const [tracks, setTrackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activTrack, setActivTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getTrack()
      .then((tracks) => {
        setTrackList(tracks);
        setLoading(false);
      })
      .catch((error) => {});
  }, []);
  console.log(tracks);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <Nav />
            <S.MainCenterblock>
              <Search />
              <Content />
              {loading ? (
                <PlaylistSkelet />
              ) : (
                <Playlist
                  setActivTrack={setActivTrack}
                  setIsPlaying={setIsPlaying}
                />
              )}
              <S.Bar>
                <Bar
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  activTrack={activTrack}
                />
              </S.Bar>
            </S.MainCenterblock>
            <Sidebar />
          </S.Main>

          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
