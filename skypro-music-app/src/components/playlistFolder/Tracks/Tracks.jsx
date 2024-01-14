import "react-loading-skeleton/dist/skeleton.css";

import * as S from "../playlist.styled";
import moment from "moment";
import { useThemeContext } from "../../../pages/Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrack } from "../../../pages/authContext/slice";

import {
  useAddMyTracksMutation,
  useAllTracksQuery,
  useDeleteMyTrackMutation,
} from "../../../api/apiMusic";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../../pages/authContext/AuthContext";

const Track = ({
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
  id,
  data,
  item,
  stared_user,
  isFavoriteLike,
}) => {
  const { user, logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const $isPlaying = useSelector((state) => state.music.isPlaying);
  const currentTrack = useSelector((state) => state.music.activeTrack);
  const { theme } = useThemeContext();
  const formattedDuration = moment
    .utc(duration_in_seconds * 1000)
    .format("mm:ss");
  const [addMyTracks, { error: likeError }] = useAddMyTracksMutation();
  const [deleteMytrack, { error: dislikeError }] = useDeleteMyTrackMutation();
  const { refetch } = useAllTracksQuery();
  if (
    (likeError && likeError.status === 401) ||
    (dislikeError && dislikeError.status === 401)
  ) {
    logout();
  }

  const isLiked = useMemo(
    () => stared_user?.some((el) => el.id === user.id),
    [stared_user, user]
  );
  const handleAddMyTrack = async (event) => {
    try {
      event.stopPropagation();
      const token = localStorage.getItem("access");
      await addMyTracks({ id, token }).unwrap();
      refetch();
    } catch (error) {}
  };

  const handleDeleteMyTrack = async (event) => {
    try {
      event.stopPropagation();
      const token = localStorage.getItem("access");
      await deleteMytrack({ id, token }).unwrap();
      refetch();
    } catch (error) {}
  };

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack key={item.id}>
        <S.TrackTitle>
          <S.TrackTitleImage theme={theme}>
            {currentTrack && currentTrack.id === item.id ? (
              <S.TrackPlayingDot $isPlaying={$isPlaying}></S.TrackPlayingDot>
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>

          <div className="track__title-text">
            <S.TrackTitleLink
              theme={theme}
              onClick={() =>
                dispatch(
                  getAllTrack({
                    name,
                    author,
                    album,
                    track_file,
                    id,
                    data,
                  })
                )
              }
            >
              {name}
              <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>

        <S.TrackAuthor>
          <S.TrackAuthorLink theme={theme}>{author}</S.TrackAuthorLink>
        </S.TrackAuthor>

        <S.TrackAlbum>
          <S.TrackAlbumLink theme={theme}>{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          {isLiked || isFavoriteLike ? (
            <S.TrackTimeSvg alt="time" onClick={handleDeleteMyTrack}>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10894 12.709C13.9894 9.20898 17.0547 3.9182 13.7001 1.47632C11.4999 -0.125251 9.04083 1.15074 8.10894 1.9647H8.08743H8.08737H8.06586C7.13397 1.15074 4.67486 -0.125251 2.47467 1.47632C-0.8799 3.9182 2.18537 9.20898 8.06586 12.709H8.08737H8.08743H8.10894Z"
                  fill="#B672FF"
                />
                <path
                  d="M8.08737 1.9647H8.10894C9.04083 1.15074 11.4999 -0.125251 13.7001 1.47632C17.0547 3.9182 13.9894 9.20898 8.10894 12.709H8.08737M8.08743 1.9647H8.06586C7.13397 1.15074 4.67486 -0.125251 2.47467 1.47632C-0.8799 3.9182 2.18537 9.20898 8.06586 12.709H8.08743"
                  stroke="#B672FF"
                />
              </svg>
            </S.TrackTimeSvg>
          ) : (
            <S.TrackTimeSvg alt="time" onClick={handleAddMyTrack}>
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
          )}
          <S.TrackTimeText>{formattedDuration}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track;
