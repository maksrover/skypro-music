// import { useState } from 'react';
import * as S from './playlistItem.styled'
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentlyPlaying } from '../../store/useAudioPlayer/AudioPlayer.slise';

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60); 
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}


function PlaylistItem(props) {
  const dispatch = useDispatch();
  // const isPlaying = useSelector((state) => state.playlist.isPlaying);
  const currentlyPlayingItem = useSelector((state) => state.playlist.currentlyPlayingItem);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
      dispatch(setCurrentlyPlaying(props.track.id)); 
    }
  };
  
  const isCurrentlyPlaying = props.track.id === currentlyPlayingItem;

  return (
    <S.PlaylistItem onClick={handleClick}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
            {isCurrentlyPlaying  && (
              <S.BlinkingDot></S.BlinkingDot>
            )}
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink >
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
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref={props.track.like}></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{formatTime(props.track.duration_in_seconds)}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
    
  )
}

export default PlaylistItem
