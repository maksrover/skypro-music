import * as S from "./filter.styled";
import { tracks } from "../data/data";

export function FilterYear() {
  return (
    <S.CenterBlockFilterItemText className="centerblock__filter_item_text">
      {tracks.map((track) => (
        <S.FiltersButton key={track.id}>{track.year}</S.FiltersButton>
      ))}
    </S.CenterBlockFilterItemText>
  );
}
