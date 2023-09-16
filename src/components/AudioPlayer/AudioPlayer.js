import { useEffect, useRef, useState } from 'react'
import * as S from './AudioPlayer.styled'
import ProgressBar from '../ProgressBar/ProgressBar'

function AudioPlayer({ trackAuthor, trackName, currentTrackUrl, trackTime }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0); 
  const duration = trackTime
  const [isLooping, setIsLooping] = useState(false);

  const handleShuffle = () => {
    alert('Еще не реализовано')
  }

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
      audioRef.current.loop = false;
      setIsLooping(false);
    } else {
      audioRef.current.loop = true;
      setIsLooping(true);
    }
  };
  
  const handleProgressBarChange = (newTime) => {
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
      });
      audioRef.current.addEventListener("ended", () => {
        if (isLooping) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        } else {
          handleStop();
 

        }
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", () => {});
        audioRef.current.removeEventListener("ended", () => {});
      }
    };
  }, [isLooping]);

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
        <div>{formatTime(currentTime)}</div>
         / 
        <div>{formatTime(duration)}</div>
      </S.Timer>
      <S.BarContent>
      <ProgressBar currentTime={currentTime} duration={duration} onChange={handleProgressBarChange}/>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg  onClick={handleShuffle} alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg onClick={togglePlay} alt="play">
                  {/* {isPlaying ? 'Pause' : 'Play'}
                вставить разные иконки */}
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
                  {/* <use xlinkHref="img/icon/sprite.svg#icon-play" /> */}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg onClick={handleShuffle} alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg onClick={toggleLoop} alt="repeat">
                {isLooping ? <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />:                   <use xlinkHref="img/icon/sprite.svg#icon-repeat" />}

                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShaffle>
                <S.BtnShuffleSvg onClick={handleShuffle} alt="shuffle">
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
