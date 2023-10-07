import SidebarLogin from '../SidebarPersonal/SidebarPersonal'
// import { SidebarPlaylistAll } from '../SidebarPlaylist/SidebarPlaylist'
// import { SidebarPlaylistSkeletonAll } from '../SidebarPlaylistSkeleton/SidebarPlaylistSkeleton'
// import { useState, useEffect } from 'react'
import * as S from './Sidebar.styles'
// import {PlaylistPages} from '../../pages/category'

function SidebarAll({onAuthButtonClick}) {
  return (
    <S.MainSidebar>
      <SidebarLogin onAuthButtonClick={onAuthButtonClick}/>
      <S.SidebarBlock>
        <S.SidebarList>

        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default SidebarAll
