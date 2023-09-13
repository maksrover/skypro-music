import styled from 'styled-components'

export const ErrorMessage = styled.p`
color: #b672ff;
font-size: 45px;
`

export const MainCenterblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
export const CenterblockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
color: white;
`

export const CenterblockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`

export const ContentTitle = styled.div`
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
`

export const PlaylistTitileCol = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
`

export const PlaylistTitileCol01 = styled(PlaylistTitileCol)`
width: 447px;
`

export const PlaylistTitileCol02 = styled(PlaylistTitileCol)`
width: 321px;
`

export const PlaylistTitileCol03 = styled(PlaylistTitileCol)`
width: 245px;
`

export const PlaylistTitileCol04 = styled(PlaylistTitileCol)`
width: 60px;
text-align: end;
`
export const PlaylistTitileSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
margin-right: 30px;
`
export const ContentPlaylist = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;
`