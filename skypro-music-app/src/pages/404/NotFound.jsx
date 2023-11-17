import React from "react";
import * as M from "../myTracks/myTracks.styled";
import * as S from "../mainFolder/main.styled";
import { Nav } from "../../components/navFolder/nav";
import { Bar } from "../../components/barFolder/bar";
import * as N from "./notFound.styled";

export function NotFound() {
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
            <N.CenterBlock>
              <N.CenterBlockh1>404</N.CenterBlockh1>
              <N.CenterBlockh2>
                Страница не найдена
                <img src="/img/smile_crying.png" alt="smile_crying" />
              </N.CenterBlockh2>
              <N.CenterBlockP>Возможно, она была удалена </N.CenterBlockP>
              <N.CenterBlockP>или перенесена на другой адрес</N.CenterBlockP>
              <N.CenterBlockButton>
                <N.CenterBlockButtonItem to="/">
                  Вернуться на главную
                </N.CenterBlockButtonItem>
              </N.CenterBlockButton>
            </N.CenterBlock>
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
