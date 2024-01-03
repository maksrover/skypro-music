import "react-loading-skeleton/dist/skeleton.css";

import * as S from "../playlist.styled";
import moment from "moment";
import { useThemeContext } from "../../../pages/Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrack } from "../../../pages/authContext/slice";

const Track = ({
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
  id,
  allTracks,
  item,
}) => {
  const dispach = useDispatch();
  const $isPlaying = useSelector((state) => state.music.$isPlaying);
  const currentTrack = useSelector((state) => state.music.activeTrack);
  const { theme } = useThemeContext();
  const formattedDuration = moment
    .utc(duration_in_seconds * 1000)
    .format("mm:ss");

  return (
    <S.PlaylistItem
      onClick={() =>
        dispach(
          getAllTrack({
            name,
            author,
            album,
            track_file,
            id,
            allTracks,
          })
        )
      }
    >
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
            <S.TrackTitleLink theme={theme}>
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
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{formattedDuration}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track;
