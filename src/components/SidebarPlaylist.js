// eslint-disable-next-line no-unused-vars
import React from 'react'
import * as S from './SidebarPlaylist.styled'

function SidebarPlaylist(props) {
  const { imgSrc, altText } = props

  return (
    <S.SidebarItem>
      <S.SidebarLink href="#">
        <S.SidebarImg src={imgSrc} alt={altText} />
      </S.SidebarLink>
    </S.SidebarItem>
  )
}

// export default SidebarPlaylist

function SidebarPlaylistAll () {
  return (
    <div>
      <SidebarPlaylist imgSrc="img/playlist01.png" altText="day's playlist" />
      <SidebarPlaylist imgSrc="img/playlist02.png" altText="100's playlist" />
      <SidebarPlaylist imgSrc="img/playlist03.png" altText="Indy's playlist" />
    </div>
  )
}

export {SidebarPlaylistAll}
