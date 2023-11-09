import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import * as S from "./centerblock.styled";
import Filter from "./centerBlockFilter";

function CenterBlock() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <S.CenterBlock>
      <S.Search>
        <S.SearchSvg />
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.Search>
      <S.H2>Треки</S.H2>
      <Filter />
      <S.ContentTitle className="playlist-title">
        <S.Col01>Треки</S.Col01>
        <S.Col02>Исполнитель</S.Col02>
        <S.Col03>Альбом</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg alt="time" />
        </S.Col04>
      </S.ContentTitle>

      <S.ContentPlaylist className="playlist">
        <S.PlaylistItem>
          <S.Track>
            <S.TrackTitle>
              <S.TrackTitleImage>
                {isLoading ? (
                  <Skeleton
                    width={55}
                    height={55}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <S.TrackTitleSvg alt="music" />
                )}
              </S.TrackTitleImage>
              <S.TrackTitleText>
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <S.TrackTitleLink href="http://">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                )}
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              {isLoading ? (
                <Skeleton
                  width={270}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
              )}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {isLoading ? (
                <Skeleton
                  width={200}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.TrackAlbumLink href="http://">
                  Welcome Reality
                </S.TrackAlbumLink>
              )}
            </S.TrackAlbum>
            <S.TrackTime>
              {isLoading ? (
                <Skeleton
                  width={60}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <>
                  <S.TrackTimeSvg alt="time" />
                  <S.TrackTimeText>4:44</S.TrackTimeText>
                </>
              )}
            </S.TrackTime>
          </S.Track>
        </S.PlaylistItem>

        {/* Add more playlist items as needed */}
      </S.ContentPlaylist>
    </S.CenterBlock>
  );
}

export default CenterBlock;
