// eslint-disable-next-line no-unused-vars
import React from 'react'
// import * as S from './SidebarPlaylist.styled'
// import {PlaylistPages} from '../../pages/category'
import {PLAYLISTTRACK} from '../../components/constants'
import TrackListFile from '../../components/track-list'
// function SidebarPlaylist(props) {
//   const { imgSrc, altText, linkId } = props

//   return (

//     <S.SidebarItem>
//       <S.SidebarLink href={linkId}>
//         <S.SidebarImg src={imgSrc} alt={altText} />
//       </S.SidebarLink>
//     </S.SidebarItem>
//   )
// }

// export default SidebarPlaylist

function SidebarPlaylistAll() {
  return (
    <div>
<TrackListFile playlisttrack={PLAYLISTTRACK}/>
      {/* <SidebarPlaylist linkId = "/login" imgSrc="img/playlist01.png" altText="day's playlist" />
      <SidebarPlaylist linkId = '/myplaylist' imgSrc="img/playlist02.png" altText="100's playlist" />
      <SidebarPlaylist imgSrc="img/playlist03.png" altText="Indy's playlist" /> */}
    </div>
  )
}

export { SidebarPlaylistAll }
