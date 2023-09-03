import * as S from './SkeletonTrack.styled'

function SkeletonTrack() {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImageSceleton></S.TrackTitleImageSceleton>
          <S.TrackTitleText>
            <S.TrackSkeleton href="http://">
              <S.TrackSkeletonText></S.TrackSkeletonText>
            </S.TrackSkeleton>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAutor>
          <S.TrackSkeleton href="http://">
            <S.TrackSkeletonText></S.TrackSkeletonText>
          </S.TrackSkeleton>
        </S.TrackAutor>
        <S.TrackAlbum>
          <S.TrackSkeleton href="http://">
            <S.TrackSkeletonText></S.TrackSkeletonText>
          </S.TrackSkeleton>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.Skeleton2></S.Skeleton2>
          <S.SkeletonText>00:00</S.SkeletonText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default SkeletonTrack
