import styled from "styled-components";

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.background};
`;
export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const BarPlayerProgress = styled.input`
  --progress-height: 8px;
  --progress-color: #b672ff;
  --progress-color: ${(props) => props.$color ?? "#b672ff"};

  --progress-bg-color: ${(props) => props.theme.progressBgColor};

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`;
export const TimeTrack = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  padding-bottom: 3px;
  color: ${(props) => props.theme.color};
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
export const BarPlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;
export const BarPlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
`;
export const BarPlayerBtnPrev = styled(BarPlayerBtn)`
  margin-right: 23px;
`;
export const BarPlayerBtnPlay = styled(BarPlayerBtn)`
  margin-right: 23px;
`;
export const BarPlayerBtnNext = styled(BarPlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
`;
export const BarPlayerBtnRepeat = styled(BarPlayerBtn)`
  margin-right: 24px;

  }

`;
export const BarPlayerBtnShuffle = styled(BarPlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const BarBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;
export const BarPlayerBtnIconHover = styled(
  BarPlayerBtnRepeat,
  BarPlayerBtnShuffle
)`
  &:hover svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`;

export const BarPlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
  stroke: #d9d9d9;
`;

export const BarPlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;

export const BarPlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const BarPlayerBtnRepeatSvgActive = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
`;
export const BarPlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const BarPlayerBtnShuffleSvgActive = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
`;
export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;
export const TrackPlayerContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 1rem;
`;
export const TrackPlayImg = styled.div`
  width: 51px;
  height: 51px;
  background-color: ${(props) => props.theme.backgroundColorNote};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;
export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const TrackPlayerAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;
export const TrackPlayerAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
  white-space: nowrap;
`;
export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  white-space: nowrap;
  color: ${(props) => props.theme.color};
`;
export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;
export const TrackPlayLike = styled.div`
  padding: 5px;
`;
export const TrackPlayLikeFlex = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;
export const TrackPlayDislike = styled(TrackPlayLike)`
  margin-left: 28.5px;
`;
export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  &:hover {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`;
export const TrackPlayDisLikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
  &:hover {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`;
export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;
export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;
export const VolumeProgress = styled.div`
  width: 109px;
`;
export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
`;
