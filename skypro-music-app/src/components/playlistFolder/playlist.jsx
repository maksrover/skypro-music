import React from "react";
import * as S from "./playlist.styled";
import { tracks } from "../data/data";

export function Playlist({ setActivTrack, setIsPlaying }) {
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
                  {track.title} <S.TrackTitleSpan></S.TrackTitleSpan>
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
            <S.TrackTimeText> {track.time} </S.TrackTimeText>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}
