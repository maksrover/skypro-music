import { useParams } from "react-router-dom";

import React from "react";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useMyFavoriteTracksQuery } from "../../api/apiMusic";
import BlockFilter from "../../components/FilterFolder/BlockFilter";
import BlockSearch from "../../components/searchFolder/BlockSearch";
import * as S from "../../components/playlistFolder/playlist.styled";
import Track from "../../components/playlistFolder/Tracks/Tracks";

export const Category = () => {

  const { theme } = useThemeContext();
  const token = localStorage.getItem("access");

  const { data = [], isLoading } = useMyFavoriteTracksQuery({ token });
  const params = useParams();

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
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.TitleCol4>
        </S.ContentTitle>

        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            data.map((item) => {
              return (
                <Track
                  key={item.id}
                  item={item}
                  {...item}
                  data={data}
                  isFavoriteLike={true}
                />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};
