import React from "react";
import * as M from "../myTracks/myTracks.styled";
import * as S from "../mainFolder/main.styled";
import { Nav } from "../../components/navFolder/nav";
import { TrackList } from "../myTracks/trackList";
import { Bar } from "../../components/barFolder/bar";

export function PlaylistOfTheDay({ loading }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <M.MainCenterblock>
            <M.CenterblockSearch>
              <M.SearchSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
              </M.SearchSvg>
              <M.SearchText type="search" placeholder="Поиск" name="search" />
            </M.CenterblockSearch>
            <M.Centerblockh2>Плейлист дня</M.Centerblockh2>
            <TrackList loading={loading} />
          </M.MainCenterblock>
          <M.SidebarPersonal>
            <M.SidebarAvatar src="/img/outsvg.svg" alt="out" />
          </M.SidebarPersonal>
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  );
}
