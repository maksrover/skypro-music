import SidebarLogin from '../SidebarPersonal/SidebarPersonal'
import { SidebarPlaylistAll } from '../SidebarPlaylist/SidebarPlaylist'
import { SidebarPlaylistSkeletonAll } from '../SidebarPlaylistSkeleton/SidebarPlaylistSkeleton'
// import { useState, useEffect } from 'react'
import * as S from './Sidebar.styles'
// import {PlaylistPages} from '../../pages/category'

function Sidebar({showSkeleton}) {
  // const [showSkeleton, setShowSkeleton] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSkeleton(false)
  //   }, 3000)

  //   return () => clearTimeout(timer)
  // }, [])
  return (
    <S.MainSidebar>
      <SidebarLogin />
      <S.SidebarBlock>
        <S.SidebarList>
          {showSkeleton ? (
            <SidebarPlaylistSkeletonAll />
          ) : (
            <SidebarPlaylistAll />
            // <PlaylistPages />
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
