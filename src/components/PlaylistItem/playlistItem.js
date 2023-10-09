import * as S from './playlistItem.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentlyPlaying } from '../../store/useAudioPlayer/AudioPlayer.slise'
import { useState } from 'react'
import { addToFavorites, delToFavorites, refreshToken } from '../../api'
import { useUserContext } from '../../UserContext'

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(remainingSeconds).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}

function PlaylistItem(props) {
  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const currentlyPlayingItem = useSelector(
    (state) => state.playlist.currentlyPlayingItem,
  )
  const { user, handleLogin } = useUserContext()
  
  // console.log('трек', props.track)

  let initialLikeStatus = true
  if (props.track.stared_user) {
    initialLikeStatus = props.track.stared_user.find((staredUser) => {
      if (user.email === staredUser.email) {
        return true
      } else {
        return false
      }
    })
  }

  const [isLiked, setIsLiked] = useState(Boolean(initialLikeStatus)) //задать значение из api

  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
      dispatch(setCurrentlyPlaying(props.track.id))
    }
  }
  //обновленный
  const handleClickLike = async () => {
    setIsLiked(!isLiked)
    try {
      if (isLiked) {
        // для удаления трека из избранного
        const response = await delToFavorites({
          accessToken: user.token.access,
          trackId: props.track.id,
        })
        console.log(response)
      } else {
        //добавление трека в избранное
        const response = await addToFavorites({
          accessToken: user.token.access,
          trackId: props.track.id,
        })
        console.log(response)
      }
      //сделать запрос списка треков, обновить стор
    } catch (error) {
      try {
        const data = await refreshToken({refreshToken: user.token.refresh})
        const newAccessToken = data.access
        handleLogin({...user, token: {access: newAccessToken, refresh: user.token.refresh}})
        const response = await delToFavorites({
          accessToken: newAccessToken,
          trackId: props.track.id,
        })
        console.log(response)
      } catch (error) {
        // navigate('/login');
        console.error(error)
      }
    }
  }

  const isCurrentlyPlaying = props.track.id === currentlyPlayingItem

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
            {isCurrentlyPlaying && <S.BlinkingDot></S.BlinkingDot>}
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink onClick={handleClick}>
              {props.track.name}
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
        {/* <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
            {props.track.release_date}
          </S.TrackAlbumLink>
        </S.TrackAlbum> */}
        <S.TrackTime>
          <S.TrackTimeSvg alt="time" onClick={handleClickLike}>
            {isLiked ? (
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            ) : (
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            )}
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {formatTime(props.track.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default PlaylistItem
