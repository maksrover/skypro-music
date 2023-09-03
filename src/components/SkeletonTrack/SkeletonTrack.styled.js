import styled from 'styled-components'

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackTitle = styled.div`
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
  width: 447px;
`

export const TrackTitleImageSceleton = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
  background-color: #f0f0f0; 
  animation: pulse 1s infinite;
  
`
/*добавить стили класса skeleton*/
export const TrackSkeleton = styled.a`
width: 185px;
height: 20px;
background: white;
display: flex;
display: block;
background-color: #f0f0f0;
animation: pulse 1s infinite; 

`

export const TrackAutor = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`

export const TrackTitleText = styled.div``

export const TrackSkeletonText = styled.span``

export const TrackAlbum = styled.div`
width: 245px;
`

export const TrackTime = styled.div``

export const Skeleton2 = styled.span`
background-color: #f0f0f0;
animation: pulse 1s infinite; 

`

export const SkeletonText = styled.span``