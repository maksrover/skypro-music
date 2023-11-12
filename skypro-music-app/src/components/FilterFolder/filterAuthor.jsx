import * as S from "./filter.styled";
import { tracks } from "../data/data";

export function FilterAuthor() {
  return (
    <S.CenterBlockFilterItemText>
      {tracks.map((track) => (
        <S.FiltersButton key={track.id}>{track.author}</S.FiltersButton>
      ))}
    </S.CenterBlockFilterItemText>
  );
}
