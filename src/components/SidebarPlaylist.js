import '../App.css'

function SidebarPlaylistDay() {
  return (
    <div className="sidebar__item">
    <a className="sidebar__link" href="#">
      <img
        className="sidebar__img"
        src="img/playlist01.png"
        alt="day's playlist"
      />
    </a>
  </div>
  )
}

function SidebarPlaylist100() {
  return (
    <div className="sidebar__item">
    <a className="sidebar__link" href="#">
      <img
        className="sidebar__img"
        src="img/playlist02.png"
        alt="day's playlist"
      />
    </a>
  </div>
  )
}

function SidebarPlaylistIndy() {
  return (
    <div className="sidebar__item">
    <a className="sidebar__link" href="#">
      <img
        className="sidebar__img"
        src="img/playlist03.png"
        alt="day's playlist"
      />
    </a>
  </div>
  )
}

export {SidebarPlaylistIndy, SidebarPlaylist100, SidebarPlaylistDay}