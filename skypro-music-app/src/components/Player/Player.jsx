import { useEffect, useRef, useState } from "react";
import React from "react";

import moment from "moment";
import * as S from "./PlayerStyled";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getPauseTrack,
  getPlayTrack,
  getNextTrack,
  getPrevTrack,
  getTracksListShuffled,
} from "../../pages/authContext/slice";

function Player() {
  const currentTrack = useSelector((state) => state.music.activeTrack);
  const $isPlaying = useSelector((state) => state.music.$isPlaying);
  const isShuffledTrackList = useSelector(
    (state) => state.music.isShuffledTrackList
  );

  const dispatch = useDispatch();
  const { theme } = useThemeContext();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(1);
  const formatedDuration = moment.utc(duration * 1000).format("mm:ss");
  const formatedCurrentTime = moment.utc(currentTime * 1000).format("mm:ss");

  const audioRef = useRef(null);

  const handelNextTrack = () => {
    dispatch(getNextTrack());
  };

  const handelPrevTrack = () => {
    dispatch(getPrevTrack());
  };

  const shuffeleHandel = () => {
    dispatch(getTracksListShuffled());
  };

  const onChange = (event) => {
    const newCurrentTime = event.target.value;
    audioRef.current.currentTime = newCurrentTime;
  };

  useEffect(() => {
    const audio = audioRef.current;

    audio.volume = 0.5;
    setVolume(audio.volume);

    const updateTime = () => {
      if (audio.currentTime && audio.duration) {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      } else {
        setDuration(0);
        setCurrentTime(0);
      }
    };

    const getEndedTrack = () => {
      dispatch(getNextTrack());
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", getEndedTrack);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", getEndedTrack);
    };
  }, [dispatch]);

  const volumeOnChange = (event) => {
    const newVolume = audioRef.current.volume;
    setVolume(newVolume);
    audioRef.current.volume = event.target.value;
  };

  const handelLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true);
  };

  const handeStopLoop = () => {
    audioRef.current.loop = false;
    setIsLoop(false);
  };

  const toggleLoop = isLoop ? handeStopLoop : handelLoop;

  useEffect(() => {
    if (currentTrack) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    } else {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      }
    }
  }, [currentTrack]);

  const handleClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      audioRef.current.pause();
    }

    dispatch($isPlaying ? getPauseTrack() : getPlayTrack());
  };
  return (
    <>
      <audio loop={false} ref={audioRef} src={currentTrack.track_file}></audio>

      <S.Bar theme={theme}>
        <S.TimeTrack theme={theme}>
          {formatedCurrentTime}/{formatedDuration}
        </S.TimeTrack>
        <S.BarContent>
          <S.BarPlayerProgress
            theme={theme}
            type="range"
            step="0.01"
            value={currentTime}
            min={0}
            max={duration}
            onChange={onChange}
          ></S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControls>
                <S.BarPlayerBtnPrev onClick={handelPrevTrack}>
                  <S.BarBtnPrevSvg theme={theme} alt="prev">
                    <use xlinkHref={theme.iconPrev}></use>
                  </S.BarBtnPrevSvg>
                </S.BarPlayerBtnPrev>
                <S.BarPlayerBtnPlay>
                  <S.BarPlayerBtnPlaySvg
                    theme={theme}
                    alt="play"
                    onClick={handleClick}
                  >
                    {$isPlaying ? (
                      <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    ) : (
                      <svg
                        width="15"
                        height="19"
                        viewBox="0 0 15 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="5" height="19" fill="#D9D9D9" />
                        <rect x="10" width="5" height="19" fill="#D9D9D9" />
                      </svg>
                    )}
                  </S.BarPlayerBtnPlaySvg>
                </S.BarPlayerBtnPlay>
                <S.BarPlayerBtnNext onClick={handelNextTrack}>
                  <S.BarPlayerBtnNextSvg theme={theme} alt="next">
                    <use xlinkHref={theme.iconNext}></use>
                  </S.BarPlayerBtnNextSvg>
                </S.BarPlayerBtnNext>
                <S.BarPlayerBtnIconHover theme={theme} onClick={toggleLoop}>
                  {isLoop ? (
                    <S.BarPlayerBtnRepeatSvgActive theme={theme} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BarPlayerBtnRepeatSvgActive>
                  ) : (
                    <S.BarPlayerBtnRepeatSvg theme={theme} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BarPlayerBtnRepeatSvg>
                  )}
                </S.BarPlayerBtnIconHover>
                <S.BarPlayerBtnIconHover onClick={shuffeleHandel}>
                  {isShuffledTrackList ? (
                    <S.BarPlayerBtnShuffleSvgActive alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.BarPlayerBtnShuffleSvgActive>
                  ) : (
                    <S.BarPlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.BarPlayerBtnShuffleSvg>
                  )}
                </S.BarPlayerBtnIconHover>
              </S.BarPlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayerContain>
                  <S.TrackPlayImg theme={theme}>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImg>
                  <S.TrackPlayerAuthor>
                    <S.TrackPlayerAuthorLink theme={theme}>
                      {currentTrack.name}
                    </S.TrackPlayerAuthorLink>
                  </S.TrackPlayerAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink theme={theme}>
                      {currentTrack.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayerContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDisLikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDisLikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={volumeOnChange}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}

export default Player;
