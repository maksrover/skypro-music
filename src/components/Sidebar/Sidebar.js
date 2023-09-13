import SidebarLogin from '../SidebarPersonal/SidebarPersonal'
import { SidebarPlaylistAll } from '../SidebarPlaylist/SidebarPlaylist'
import { SidebarPlaylistSkeletonAll } from '../SidebarPlaylistSkeleton/SidebarPlaylistSkeleton'
import { useState, useEffect } from 'react'
import * as S from './Sidebar.styles'
import DataFetcher from '../../api'
// import {PlaylistPages} from '../../pages/category'

function Sidebar() {
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [, setAddTodoError] = useState(null);

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
        <DataFetcher
            setShowSkeleton={setShowSkeleton}
            setAddTodoError={setAddTodoError}
          />
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
