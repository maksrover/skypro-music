import SidebarLogin from '../SidebarPersonal/SidebarPersonal'
import { SidebarPlaylistAll } from '../SidebarPlaylist/SidebarPlaylist'
import { SidebarPlaylistSkeletonAll } from '../SidebarPlaylistSkeleton/SidebarPlaylistSkeleton'
// import { useState, useEffect } from 'react'
import * as S from './Sidebar.styles'
// import {PlaylistPages} from '../../pages/category'

function Sidebar({showSkeleton, onAuthButtonClick}) {
  return (
    <S.MainSidebar>
      <SidebarLogin onAuthButtonClick={onAuthButtonClick}/>
      <S.SidebarBlock>
        <S.SidebarList>
          {showSkeleton ? (
            <SidebarPlaylistSkeletonAll />
          ) : (
            <SidebarPlaylistAll />
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
