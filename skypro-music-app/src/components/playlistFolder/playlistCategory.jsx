import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import {
  useGetSelectionCategoryQuery,
  useMyFavoriteTracksQuery,
} from "../../api/apiMusic";
import { AuthContext } from "../../pages/authContext/AuthContext";
import BlockFilter from "../FilterFolder/BlockFilter";
import BlockSearch from "../searchFolder/BlockSearch";
import * as S from "../playlistFolder/playlist.styled";
import Track from "../playlistFolder/Tracks/Tracks";

const PlayListCategory = () => {
  const { theme } = useThemeContext();
  const params = useParams();

  const token = localStorage.getItem("access");
  const { logout } = useContext(AuthContext);
  const { error: likeError, error: dislikeError } = useMyFavoriteTracksQuery({
    token,
  });

  useEffect(() => {
    if (
      (likeError && likeError.status === 401) ||
      (dislikeError && dislikeError.status === 401)
    ) {
      logout();
    }
  });

  const { data = [] } = useGetSelectionCategoryQuery({ id: params.id });
  const ArrCategorys = [
    {
      id: 1,
      title: "Плейлист дня",
    },
    {
      id: 2,
      title: "100 хитов",
    },
    {
      id: 3,
      title: "Инди-заряд",
    },
  ];
  const category = ArrCategorys.find(
    (categor) => categor.id === Number(params.id)
  );

  const dataItem = data.items;
  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>
        {category.title}
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
          {dataItem?.map((item) => {
            return (
              <Track
                key={item.id}
                item={item}
                {...item}
                data={dataItem}
                isCategoryLike={false}
              />
            );
          })}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

export default PlayListCategory;
