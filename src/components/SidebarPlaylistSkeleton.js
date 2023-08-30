import '../App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function SidebarPlaylistSkeleton() {
  return (
    <div className="sidebar__item">
      <div className="sidebar__link skeleton">
        <div className="sidebar__img skeleton-img"></div>
      </div>
    </div>
  )
}

// export default SidebarPlaylistSkeleton;

function SidebarPlaylistSkeletonAll() {
  return (
    <div>
      <SidebarPlaylistSkeleton />
      <SidebarPlaylistSkeleton />
      <SidebarPlaylistSkeleton />
    </div>
  )
}

export {SidebarPlaylistSkeletonAll}