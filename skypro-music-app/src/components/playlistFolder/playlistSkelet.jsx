import React from "react";
import Skeleton from "./skelet";

import * as S from "./playlist.styled";

export function PlaylistSkelet() {
  return (
    <S.ContentPlaylist>
      {[1, 2, 3, 4, 5].map((id) => (
        <S.PlaylistItem key={id}>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <Skeleton width={55} height={55} />
              </S.TrackTitleImg>
              <S.TrackTitleLink>
                <Skeleton width={356} height={19} />
              </S.TrackTitleLink>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink>
                <Skeleton width={271} height={19} />
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink>
                <Skeleton width={305} height={19} />
              </S.TrackAlbumLink>
            </S.TrackAlbum>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}
