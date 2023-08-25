import '../App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function SidebarPlaylist(props) {
  const { imgSrc, altText } = props

  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={imgSrc} alt={altText} />
      </a>
    </div>
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
