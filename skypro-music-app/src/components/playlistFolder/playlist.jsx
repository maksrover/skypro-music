import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import * as S from "./playlist.styled";
import { tracks } from "../data/data";

export function Playlist() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <S.ContentPlaylist>
      {tracks.map((track) => (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {isLoading ? (
                  <Skeleton
                    width={55}
                    height={55}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                )}
              </S.TrackTitleImg>
              <S.TrackTitleLink>
                {isLoading ? (
                  <Skeleton width={200} height={19} />
                ) : (
                  `${track.title}`
                )}
                <S.TrackTitleSpan>
                  {isLoading ? <Skeleton width={20} height={19} /> : ""}
                </S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink>
                {isLoading ? (
                  <Skeleton width={200} height={19} />
                ) : (
                  `${track.author}`
                )}
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink>
                {isLoading ? (
                  <Skeleton width={200} height={19} />
                ) : (
                  `${track.album}`
                )}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {" "}
              {isLoading ? <Skeleton width={40} height={19} /> : ""}
            </S.TrackTimeText>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}
