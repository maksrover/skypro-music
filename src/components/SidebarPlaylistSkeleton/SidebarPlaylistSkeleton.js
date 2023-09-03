// eslint-disable-next-line no-unused-vars
import React from 'react'
import * as S from './SidebarPlaylistSkeleton.style'

function SidebarPlaylistSkeleton() {
  return (
    <S.SidebarItem>
      <S.SidebarLink>
        <S.SidebarImg></S.SidebarImg>
      </S.SidebarLink>
    </S.SidebarItem>
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

/**
 * Удалить?         <SidebarImg></SidebarImg>
 * и слити для него
 * const SidebarImg = styled.div`
width: 100%;
height: auto;
}
`
 */