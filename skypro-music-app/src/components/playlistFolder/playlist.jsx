import React, { useState, useEffect } from "react";
import Player from "../Player/Player.jsx";
import BlockFilter from "../FilterFolder/BlockFilter.jsx";
import BlockSearch from "../searchFolder/BlockSearch.jsx";
import Track from "./Tracks/Tracks";
import { getTrack } from "../../api/api.js";
import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";

import * as S from "./playlist.styled";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../Skeletons/SkeletonTrack";

function PlayList() {
  const [errorTrack, setErrorTrack] = useState(null);
  const [allTracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useThemeContext();

  useEffect(() => {
    console.log(allTracks);
  }, [allTracks]);

  useEffect(() => {
    getTrack()
      .then((tracks) => {
        setTracks(tracks);
      })
      .catch((error) => {
        setErrorTrack(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <S.MainCenterblock>
      <Player />
      <BlockSearch />
      <S.CenterblockHeading theme={theme}>Треки</S.CenterblockHeading>
      <BlockFilter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.TitleCol1>Трек</S.TitleCol1>
          <S.TitleCol2>ИСПОЛНИТЕЛЬ</S.TitleCol2>
          <S.TitleCol3>АЛЬБОМ</S.TitleCol3>
          <S.TitleCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.TitleCol4>
        </S.ContentTitle>
        {errorTrack ? (
          <p>Не удалось загрузить плейлист, попробуйте позже</p>
        ) : null}
        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            allTracks.map((item) => {
              return (
                <Track
                  isLoading={isLoading}
                  key={item.id}
                  item={item}
                  {...item}
                  allTracks={allTracks}
                />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default PlayList;
