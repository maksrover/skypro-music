import BlockFilter from "../FilterFolder/BlockFilter";
import BlockSearch from "../searchFolder/BlockSearch";

import Track from "./Tracks/Tracks";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../../components/Skeletons/SkeletonTrack";
import * as S from "./playlist.styled";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useAllTracksQuery } from "../../api/apiMusic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clearTheFilter,
  setTrackListForFilter,
} from "../../pages/authContext/slice";

function PlayList() {
  const { theme } = useThemeContext();
  const { data, isLoading } = useAllTracksQuery();
  const filtredDataRedux = useSelector((state) => state.music.filteredTracks);
  const initialTracks = useSelector((state) => state.music.tracksForFilter);
  const isFiltred = useSelector((state) => state.music.isFiltred);
  let newFiltredData = isFiltred ? filtredDataRedux : initialTracks;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearTheFilter());
    dispatch(setTrackListForFilter(data || []));
  }, [dispatch, data, isLoading]);

  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>Треки</S.CenterblockHeading>

      <BlockFilter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.TitleCol1>Трек</S.TitleCol1>
          <S.TitleCol2>ИСПОЛНИТЕЛЬ</S.TitleCol2>
          <S.TitleCol3>АЛЬБОМ</S.TitleCol3>
          <S.TitleCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
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
}

export default PlayList;
