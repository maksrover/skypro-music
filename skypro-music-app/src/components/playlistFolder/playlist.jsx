import React, { useEffect, useState } from "react";
import * as S from "./playlist.styled";
import { getTrack } from "../../pages/api";

export function Playlist({ setActivTrack, setIsPlaying }) {
  const [tracks, setTracks] = useState([]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    getTrack()
      .then((tracks) => {
        setTracks(tracks);
      })
      .catch((error) => {
        console.error("Error fetching tracks:", error);
      });
  }, []);

  return (
    <S.ContentPlaylist>
      {tracks.map((track) => (
        <S.PlaylistItem
          key={track.id}
          onClick={() => {
            setActivTrack(track);
            setIsPlaying(true);
          }}
        >
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <>
                <S.TrackTitleLink>
                  {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>

            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {" "}
              {formatTime(track.duration_in_seconds)}{" "}
            </S.TrackTimeText>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}
