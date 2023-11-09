import React from "react";
import * as S from "./Sidebar.styled";

function Sidebar() {
  return (
    <S.SidebarWrapper>
      <S.PersonalWrapper>
        <S.PersonalName>atamyrat.isayev</S.PersonalName>
        <S.IconWrapper>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6711 16.046V14.7419C25.6711 13.2276 24.4435 12 22.9292 12H16.7419C15.2276 12 14 13.2276 14 14.7419V26.0645C14 27.5788 15.2276 28.8065 16.7419 28.8065H22.9292C24.4435 28.8065 25.6711 27.5788 25.6711 26.0645V24.6048M18.3572 20.3254H33.2963M33.2963 20.3254L30.1062 23.5155M33.2963 20.3254L30.1062 17.1353"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="20" r="19.5" stroke="white" />
          </svg>
        </S.IconWrapper>
      </S.PersonalWrapper>
      <S.BlockWrapper>
        <S.ListWrapper>
          <S.ItemWrapper>
            <S.LinkWrapper href="profile.social.twitter">
              <S.ImgWrapper src="img/playlist01.png" alt="day's playlist" />
            </S.LinkWrapper>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <S.LinkWrapper href="profile.social.twitter">
              <S.ImgWrapper src="img/playlist02.png" alt="day's playlist" />
            </S.LinkWrapper>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <S.LinkWrapper href="profile.social.twitter">
              <S.ImgWrapper src="img/playlist03.png" alt="day's playlist" />
            </S.LinkWrapper>
          </S.ItemWrapper>
        </S.ListWrapper>
      </S.BlockWrapper>
      <S.BarWrapper>
        <S.BarContentWrapper>
          <S.PlayerProgressWrapper />
          <S.PlayerBlockWrapper>
            <S.PlayerWrapper>
              <S.PlayerControls>
                <S.PlayerControlBtn>
                  <svg className="player__btn-prev-svg" alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </S.PlayerControlBtn>
                <S.PlayerControlBtn>
                  <svg className="player__btn-play-svg" alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </svg>
                </S.PlayerControlBtn>
                <S.PlayerControlBtn>
                  <svg className="player__btn-next-svg" alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </S.PlayerControlBtn>
                <S.PlayerControlBtn>
                  <svg className="player__btn-repeat-svg" alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </S.PlayerControlBtn>
                <S.PlayerControlBtn>
                  <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </S.PlayerControlBtn>
              </S.PlayerControls>
              <S.TrackPlayWrapper>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <svg className="track-play__svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <a className="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <a className="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.TrackPlayWrapper>
            </S.PlayerWrapper>
            <S.VolumeBlockWrapper>
              <S.VolumeContentWrapper>
                <S.VolumeImage>
                  <svg className="volume__svg" alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
              </S.VolumeContentWrapper>
            </S.VolumeBlockWrapper>
          </S.PlayerBlockWrapper>
        </S.BarContentWrapper>
      </S.BarWrapper>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
