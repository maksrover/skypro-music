import "./centerBlock.css";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Filter from "./centerBlockFilter/centerBlockFilter";
import styled from "styled-components";

const StyledMainCenterblock = styled.nav`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

const StyledCenterBlockSearch = styled.nav`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
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
`;

const StyledH2 = styled.nav`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

const StyledCenterBlockContent = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const StyledSearchSvg = styled.nav`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;

const StyledSearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
const StyledContentTitle = styled.nav`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

function CenterBlock() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <StyledMainCenterblock>
      <StyledCenterBlockSearch>
        <StyledSearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </StyledSearchSvg>
        <StyledSearchText
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </StyledCenterBlockSearch>
      <StyledH2>Треки</StyledH2>
      <Filter />
      <StyledCenterBlockContent>
        <StyledContentTitle>
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </StyledContentTitle>

        <div className="content__playlist playlist">
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Guilt <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Nero
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Welcome Reality
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">4:44</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Elektro <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Dynoro, Outwork, Mr. Gee
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Elektro
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      I’m Fire <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Ali Bakgor
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    I’m Fire
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">2:22</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Non Stop
                      <span className="track__title-span">(Remix)</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Стоункат, Psychopath
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Non Stop
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">4:12</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Run Run
                      <span className="track__title-span">(feat. AR/CO)</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Jaded, Will Clarke, AR/CO
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Run Run
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">2:54</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Eyes on Fire
                      <span className="track__title-span">
                        (Zeds Dead Remix)
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Blue Foundation, Zeds Dead
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Eyes on Fire
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">5:20</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Mucho Bien
                      <span className="track__title-span">
                        (Hi Profile Remix)
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Mucho Bien
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">3:41</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">1:48</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">1:48</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">1:48</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">1:48</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">1:48</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">1:48</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">1:48</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      How Deep Is Your Love
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Calvin Harris, Disciples
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    How Deep Is Your Love
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">3:32</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Morena <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="http://">
                    Tom Boxer
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Soundz Made in Romania
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">3:36</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {isLoading ? (
                    <Skeleton
                      width={55}
                      height={55}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  )}
                </div>
                <div className="track__title-text">
                  {isLoading ? (
                    <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <a className="track__title-link" href="http://">
                      Lost
                      <span className="track__title-span"></span>
                    </a>
                  )}
                </div>
              </div>
              <div className="track__author">
                {isLoading ? (
                  <Skeleton
                    width={270}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__author-link" href="https://">
                    Linkin Park
                  </a>
                )}
              </div>
              <div className="track__album">
                {isLoading ? (
                  <Skeleton
                    width={200}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <a className="track__album-link" href="http://">
                    Meteora
                  </a>
                )}
              </div>
              <div className="track__time">
                {isLoading ? (
                  <Skeleton
                    width={60}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                ) : (
                  <>
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">3:18</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </StyledCenterBlockContent>
    </StyledMainCenterblock>
  );
}

export default CenterBlock;
