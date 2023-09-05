import * as S from './playlistItem.styled'

function PlaylistItem(props) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
              {props.track.track}
              <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAutor>
          <S.TrackAutorLink href="http://">
            {props.track.author}
          </S.TrackAutorLink>
        </S.TrackAutor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
            {props.track.album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref={props.track.like}></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.track.time}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default PlaylistItem
