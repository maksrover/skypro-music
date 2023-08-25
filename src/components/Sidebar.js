import '../App.css'
import SidebarLogin from './SidebarPersonal'
import {SidebarPlaylistAll} from './SidebarPlaylist'
import {SidebarPlaylistSkeletonAll} from './SidebarPlaylistSkeleton'
import { useState, useEffect } from 'react'

function Sidebar() {
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="main__sidebar sidebar">
      <SidebarLogin />
      <div className="sidebar__block">
        <div className="sidebar__list">
        {showSkeleton ? <SidebarPlaylistSkeletonAll /> : <SidebarPlaylistAll />}
          {/* <SidebarPlaylistAll/>
          <SidebarPlaylistSkeletonAll/> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
