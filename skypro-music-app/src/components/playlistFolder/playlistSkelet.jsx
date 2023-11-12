import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import * as S from "./playlist.styled";

export function PlaylistSkelet() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <S.ContentPlaylist>
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
                <S.TrackTitleSvg alt="music" />
              )}
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
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
                <S.TrackTitleSvg alt="music" />
              )}
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
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
                <S.TrackTitleSvg alt="music" />
              )}
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
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
                <S.TrackTitleSvg alt="music" />
              )}
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music" />
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music" />
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music" />
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music" />
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music" />
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <S.TrackTitleSvg alt="music" />
            </S.TrackTitleImg>
            <>
              <S.TrackTitleLink href="http://">
                <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
          </S.TrackAlbum>
        </S.PlaylistTrack>
        <br></br>
      </S.PlaylistItem>
    </S.ContentPlaylist>
  );
}
