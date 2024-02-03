import BlockFilter from "../FilterFolder/BlockFilter.jsx";
import BlockSearch from "../searchFolder/BlockSearch.jsx";
import Track from "./Tracks/Tracks";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../Skeletons/SkeletonTrack.jsx";
import * as S from "./playlist.styled.js";

import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";
import { useAllTracksQuery } from "../../api/apiMusic.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTrackListForFilter } from "../../pages/authContext/slice.js";

const PlayListCategory = () => {
  const { theme } = useThemeContext();
  const { data = [], isLoading } = useAllTracksQuery();

  const filtredDataRedux = useSelector((state) => state.music.filteredTracks);
  const initialTracks = useSelector((state) => state.music.tracksForFilter);
  const isFiltred = useSelector((state) => state.music.isFiltred);
  let newFiltredData = isFiltred ? filtredDataRedux : initialTracks;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTrackListForFilter(data));
  }, [isLoading]);

  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>
    
      </S.CenterblockHeading>

      <BlockFilter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.TitleCol1>Трек</S.TitleCol1>
          <S.TitleCol2>ИСПОЛНИТЕЛЬ</S.TitleCol2>
          <S.TitleCol3>АЛЬБОМ</S.TitleCol3>
          <S.TitleCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.TitleCol4>
        </S.ContentTitle>

        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            newFiltredData.map((item) => {
              return (
                <Track
                  key={item.id}
                  item={item}
                  {...item}
                  data={data}
                  isFavoriteLike={false}
                />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

export default PlayListCategory;
