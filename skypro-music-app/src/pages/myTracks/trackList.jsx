import React from "react";
import * as S from "../components/playlistFolder/playlist.styled";
import * as M from "./myTracks.styled";
import Skeleton from "../components/skelet/skelet";

export function TrackList({ loading }) {
  return (
    <M.CenterBlockContent>
      <M.ContentTitle>
        <M.PlaylistTitlecol01>Трек</M.PlaylistTitlecol01>
        <M.PlaylistTitlecol02>ИСПОЛНИТЕЛЬ</M.PlaylistTitlecol02>
        <M.PlaylistTitlecol03>АЛЬБОМ</M.PlaylistTitlecol03>
        <M.PlaylistTitlecol04>
          <M.PlaylistTitleSvg alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
          </M.PlaylistTitleSvg>
        </M.PlaylistTitlecol04>
      </M.ContentTitle>
      <Playlist loading={loading} />
    </M.CenterBlockContent>
  );
}

export function Playlist({ loading }) {
  return (
    <S.ContentPlaylist>
      {loading ? (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music" />
              </S.TrackTitleImg>
              <div>
                <S.TrackTitleLink href="http://">
                  <Skeleton width="356px" height="19px" />
                  <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                <Skeleton width="271px" height="19px" />
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                <Skeleton width="305px" height="19px" />
              </S.TrackAlbumLink>
            </S.TrackAlbum>
          </S.PlaylistTrack>
          <br></br>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music" />
              </S.TrackTitleImg>
              <div>
                <S.TrackTitleLink href="http://">
                  <Skeleton width="356px" height="19px" />
                  <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                <Skeleton width="271px" height="19px" />
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                <Skeleton width="305px" height="19px" />
              </S.TrackAlbumLink>
            </S.TrackAlbum>
          </S.PlaylistTrack>
          <br></br>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music" />
              </S.TrackTitleImg>
              <div>
                <S.TrackTitleLink href="http://">
                  <Skeleton width="356px" height="19px" />
                  <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                <Skeleton width="271px" height="19px" />
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                <Skeleton width="305px" height="19px" />
              </S.TrackAlbumLink>
            </S.TrackAlbum>
          </S.PlaylistTrack>
          <br></br>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music" />
              </S.TrackTitleImg>
              <div>
                <S.TrackTitleLink href="http://">
                  <Skeleton width="356px" height="19px" />
                  <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                <Skeleton width="271px" height="19px" />
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                <Skeleton width="305px" height="19px" />
              </S.TrackAlbumLink>
            </S.TrackAlbum>
          </S.PlaylistTrack>
          <br></br>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music" />
              </S.TrackTitleImg>
              <div>
                <S.TrackTitleLink href="http://">
                  <Skeleton width="356px" height="19px" />
                  <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                <Skeleton width="271px" height="19px" />
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                <Skeleton width="305px" height="19px" />
              </S.TrackAlbumLink>
            </S.TrackAlbum>
          </S.PlaylistTrack>
          <br></br>
        </S.PlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <div>
                  <S.TrackTitleLink href="http://">
                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">
                  Welcome Reality
                </S.TrackAlbumLink>
              </S.TrackAlbum>
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>4:44</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

          <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <div>
                  <S.TrackTitleLink href="http://">
                    Elektro <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  Dynoro, Outwork, Mr. Gee
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">Elektro</S.TrackAlbumLink>
              </S.TrackAlbum>
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>2:22</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

          <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <div>
                  <S.TrackTitleLink href="http://">
                    I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">Ali Bakgor</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">I’m Fire</S.TrackAlbumLink>
              </S.TrackAlbum>
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>2:22</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

          <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <div>
                  <S.TrackTitleLink href="http://">
                    Non Stop <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  Стоункат, Psychopath
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">Non Stop</S.TrackAlbumLink>
              </S.TrackAlbum>
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>4:12</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

          <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                <div>
                  <S.TrackTitleLink href="http://">
                    Run Run <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  Jaded, Will Clarke, AR/CO
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">Run Run</S.TrackAlbumLink>
              </S.TrackAlbum>
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>2:54</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        </S.PlaylistItem>
      )}
    </S.ContentPlaylist>
  );
}
