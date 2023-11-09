import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;

export const PersonalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`;

export const PersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;

export const IconWrapper = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`;

export const BlockWrapper = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const LinkWrapper = styled.a`
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.img`
  width: 100%;
  height: auto;
`;

export const BarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const BarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayerProgressWrapper = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;

export const PlayerBlockWrapper = styled.div`
  height: 73px;
  display: flex;
  justify-content: space-between;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PlayerControls = styled.div`
  display: flex;
`;

export const PlayerControlBtn = styled.div`
  padding: 5px;

  &:first-child {
    margin-right: 23px;
  }

  &:last-child {
    margin-right: 28px;
    fill: #a53939;
  }
`;

export const TrackPlayWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "image author"
    "image album";
  align-items: center;
`;

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const TrackPlayAuthor = styled.div`
  min-width: 49px;
`;

export const TrackPlayAlbum = styled.div`
  min-width: 49px;
`;

export const TrackPlayLikeDis = styled.div`
  display: flex;
  align-items: center;
  margin-left: 26%;
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
`;

export const TrackPlayDislike = styled.div`
  margin-left: 28.5px;
`;

export const VolumeBlockWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const VolumeContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const VolumeProgress = styled.div`
  width: 109px;
`;
