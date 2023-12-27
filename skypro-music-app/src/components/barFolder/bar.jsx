import React from "react";
import * as S from "./bar.styled";
import { useRef, useState, useEffect } from "react";

export function Bar({ isPlaying, setIsPlaying, activTrack }) {
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioComponentRef = useRef(null);
  const handleClick = () => {
    if (isPlaying) {
      audioComponentRef.current.pause();
      setIsPlaying(false);
    } else {
      audioComponentRef.current.play();
      setIsPlaying(true);
    }
  };
  const repeatClick = () => {
    audioComponentRef.current.loop = !isRepeat;
    setIsRepeat(!isRepeat);
  };
  const volumeOnChange = (event) => {
    const newVolume = audioComponentRef.current.volume;
    setVolume(newVolume);
    audioComponentRef.current.volume = event.target.value;
  };
  const timeOnChange = (event) => {
    audioComponentRef.current.currentTime = event.target.value;
  };
  useEffect(() => {
    const ref = audioComponentRef.current;

    const timeUpdate = () => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime);
        setDuration(ref.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };
    ref.addEventListener("timeupdate", timeUpdate);

    return () => {
      ref.removeEventListener("timeupdate", timeUpdate);
    };
  });
  const buttonPlug = () => alert("Еще не реализовано");
  return (
    <S.Bar>
      <S.BarContent>
        <S.AudioComponent
          controls
          src={activTrack.track_file}
          ref={audioComponentRef}
          autoPlay
        ></S.AudioComponent>
        <S.StyledProgressInput
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={timeOnChange}
          $color="#ff0000"
        />
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg
                  className="_btn"
                  alt="play"
                  onClick={handleClick}
                >
                  {isPlaying ? (
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
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.BtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.BtnNext>
              <S.PlayerBtnRepeat className="_btn-icon" onClick={repeatClick}>
                <S.BtnRepeatSvg
                  className="player__btn-repeat-svg"
                  alt="repeat"
                  $isRepeat={isRepeat}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </S.BtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className="_btn-icon">
                <S.PlayerBtnShuffleSvg alt="shuffle" onClick={buttonPlug}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    {activTrack.name}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    {activTrack.author}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.VolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                  value={volume}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={volumeOnChange}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
