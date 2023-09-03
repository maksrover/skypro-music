import SidebarLogin from './SidebarPersonal'
import {SidebarPlaylistAll} from './SidebarPlaylist'
import {SidebarPlaylistSkeletonAll} from './SidebarPlaylistSkeleton'
import { useState, useEffect } from 'react'
import * as S from './Sidebar.styles'

function Sidebar() {
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <S.MainSidebar>
      <SidebarLogin />
      <S.SidebarBlock>
        <S.SidebarList>
        {showSkeleton ? <SidebarPlaylistSkeletonAll /> : <SidebarPlaylistAll />}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
