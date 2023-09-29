import { useEffect, useRef, useState } from 'react'
import * as S from './AudioPlayer.styled'
import { useDispatch } from 'react-redux'
import {
  playPreviousTrack,
  playNextTrack,
  togglePlayState,
} from '../../store/useAudioPlayer/AudioPlayer.slise'
import { useSelector } from 'react-redux'

function AudioPlayer({
  currentTrackUrl,
  onToggleShuffle,
}) {
  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [isLooping, setIsLooping] = useState(false)
  const isPlaying = useSelector((state) => state.playlist.isPlaying)
  const isShuffling = useSelector((state) => state.playlist.isShuffling)
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const trackAuthor = useSelector((state) => state.playlist.trackAuthor)
  const trackName = useSelector((state) => state.playlist.trackName)
  const [duration, setDuration] = useState(0);
  const togglePlay = () => {
    const audioElement = audioRef.current
    if (audioElement.paused) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
    dispatch(togglePlayState())
  }
  const toggleLoop = () => {
    if (isLooping) {
      audioRef.current.loop = false
      setIsLooping(false)
    } else {
      audioRef.current.loop = true
      setIsLooping(true)
    }
  }

  const handleProgressBarChange = (newTime) => {
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // const handlePlayPrevious = () => {
  //   dispatch(playPreviousTrack());
  //   const newTrackUrl = state.playlist.currentTrackUrl;
  
  //   if (audioRef.current) {
  //     audioRef.current.pause();

  //     if (newTrackUrl !== audioRef.current.src) {
  //       audioRef.current.src = newTrackUrl;
  
  //       audioRef.current.addEventListener('canplay', () => {
  //         audioRef.current.play();
  //       });
  
  //       audioRef.current.load();
  //     } else {
  //       // audioRef.current.pause();
  //       // dispatch(togglePlayState());
  //       audioRef.current.play();
  //     }
  //   }
  // }
  const handlePlayPrevious = () => {
    dispatch(playPreviousTrack());
    const newTrackUrl = state.playlist.currentTrackUrl;
  
    if (audioRef.current) {
      audioRef.current.pause();

      if (newTrackUrl !== audioRef.current.src) {
        audioRef.current.src = newTrackUrl;
  
  
      audioRef.current.onloadedmetadata = () => {
        audioRef.current.play(); 
      };
      audioRef.current.load();
    } else {
      // audioRef.current.pause();
      // dispatch(togglePlayState());
      audioRef.current.play();
    }
  }
}
  
  const handlePlayNext = () => {
    dispatch(playNextTrack());
    const newTrackUrl = state.playlist.currentTrackUrl;
    const currentIndex = state.playlist.currentIndex;
    const playlistLength = state.playlist.tracks.length;
  
    if (currentIndex < playlistLength - 1) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = newTrackUrl;
  
        audioRef.current.onloadedmetadata = () => {
          audioRef.current.play(); 
        };
  
        audioRef.current.load(); 
      }
    } else {
      //ничего не проихсодит
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = state.playlist.currentTrackUrl;
      audioRef.current.addEventListener('canplaythrough', () => {
        audioRef.current.play();
      });
      audioRef.current.load();
    }
  }, [state.playlist.currentTrackUrl]);

  useEffect(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);

      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener('timeupdate', updateTime);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadedmetadata', () => {
          setDuration(audioRef.current.duration);
        });
        audioRef.current.removeEventListener('timeupdate', updateTime);
      }
    };
  }, [currentTrackUrl]);

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }
// когда трек закончился, воспроизводиться следующий
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handlePlayNext);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handlePlayNext);
      }
    }
  }, [currentTrackUrl]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')
    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <S.Bar>
      <S.Timer>
        <div>{formatTime(currentTime)}</div>/<div>{formatTime(duration)}</div>
      </S.Timer>
      <S.BarContent>
      <S.ProgressInput
      type="range"
      min={0}
      max={!isNaN(duration) ? duration : 0}
      value={currentTime}
      step={0.01}
      onChange={(event) => {
        const newTime = parseFloat(event.target.value);
        handleProgressBarChange(newTime);
      }}
      $color="#ff0000"
    />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg onClick={handlePlayPrevious} alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg onClick={togglePlay} alt="play">
                  {!isPlaying ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-pause" />
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next" onClick={handlePlayNext}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg onClick={toggleLoop} alt="repeat">
                  {isLooping ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-repeaton" />
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  )}
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShaffle>
                <S.BtnShuffleSvg onClick={onToggleShuffle} alt="shuffle">
                  {!isShuffling ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffleon" />
                  )}
                </S.BtnShuffleSvg>
              </S.PlayerBtnShaffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAutor>
                  <S.TrackPlayAutorLink href="http://">
                    {trackName}
                  </S.TrackPlayAutorLink>
                </S.TrackPlayAutor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    {trackAuthor}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.PVolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.PVolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  name="volume"
                  onChange={(e) => {
                    if (audioRef.current) {
                      audioRef.current.volume = e.target.value
                    }
                  }}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
      <S.Audio ref={audioRef} src={currentTrackUrl} controls autoPlay />
    </S.Bar>
  )
}

export default AudioPlayer
