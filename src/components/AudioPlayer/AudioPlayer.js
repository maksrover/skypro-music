import { useEffect, useRef, useState } from 'react'
import * as S from './AudioPlayer.styled'
import ProgressBar from '../ProgressBar/ProgressBar'
import { useDispatch } from 'react-redux';
import { playPreviousTrack, playNextTrack } from '../../store/useAudioPlayer/AudioPlayer.slise';
import { useSelector } from 'react-redux';

function AudioPlayer({
  trackAuthor,
  trackName,
  currentTrackUrl,
  trackTime,
  // onPlayNext,
  // onPlayPrevious,
  onToggleShuffle,
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const duration = trackTime
  const [isLooping, setIsLooping] = useState(false)
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  
  // const handleShuffle = () => {
  //   alert('Еще не реализовано')
  // }

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

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

  /*
  Если нажать shaffle и след трек, то в devtools должны начать появляться данные иногда даже проигрываться)))
  Понимаю что косячно все, но не понимаю что где и как именно
  */
  const handlePlayPrevious = () => {
    dispatch(playPreviousTrack());
    const previousIndex = (state.playlist.currentTrackIndex - 1 + state.playlist.tracks.length) % state.playlist.tracks.length;
    const previousTrack = state.playlist.tracks[previousIndex].track_file;
    audioRef.current.src = previousTrack;
    audioRef.current.play();
  };

  const handlePlayNext = () => {
    dispatch(playNextTrack());
    const nextIndex = (state.playlist.currentTrackIndex + 1) % state.playlist.tracks.length;
    const nextTrack = state.playlist.tracks[nextIndex].track_file;
    audioRef.current.src = nextTrack;
    audioRef.current.play();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateTime)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime)
      }
    }
  }, [])

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

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
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onChange={handleProgressBarChange}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                    >
                      <path
                        d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="19"
                      viewBox="0 0 15 19"
                      fill="none"
                    >
                      <rect width="5" height="19" fill="#D9D9D9" />
                      <rect x="10" width="5" height="19" fill="#D9D9D9" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      viewBox="0 0 20 25"
                      fill="none"
                    >
                      <path
                        d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                        fill="red"
                      />
                      <path
                        d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                        fill="red"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      viewBox="0 0 20 25"
                      fill="none"
                    >
                      <path
                        d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                        fill="#696969"
                      />
                      <path
                        d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                        fill="#696969"
                      />
                    </svg>
                  )}
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShaffle>
                <S.BtnShuffleSvg onClick={onToggleShuffle} alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
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
